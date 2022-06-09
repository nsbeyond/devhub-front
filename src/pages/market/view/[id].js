import React, { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { getViewItem, getCommentLike } from '../../../utils/marketApi'
import { useRouter } from 'next/router'
import _ from 'lodash'
import Button from '../../../components/Button'

const MarketView = () => {
  const [item, setPostItem] = useState({})
  const router = useRouter()
  const { id } = router.query

  useEffect(async() => {
    const postData = await getViewItem(id)
    if (!_.isEmpty(postData)) {
      setPostItem(postData)
      console.log({postData})
    }
  }, [id])

  const picURL = _.get(item, 'market_place_picture.pic_url')
  const mkpLike = _.get(item, 'market_place_likes')
  const mkpComment = _.get(item, 'market_place_comments')
  const priceTo = _.get(item, 'price_to')
  const priceFrom = _.get(item, 'price_from')

  return (
    <>
      <NextSeo
        title="Market Place"
      />
      <div className="w-10/12">
          <Button
            fontSize={18}
            fontWeight="bold"
            bgColor="#fff"
            color="#000"
            hoverBgColor="#fff"
            hoverColor="#048df9"
            borderColor="#048df9"
            onClick={() => router.back()}
          >
            Back
          </Button>
          <br/>
          <br/>
          <hr/>
          <br/>
          <div class="flex flex-inline">
            <h3>
              {_.get(item, 'product_name')}
            </h3>
            <h5 style={{paddingLeft: '10px',}}> (Like {_.size(mkpLike)})</h5>
          </div>
          {(!_.isEmpty(picURL) && 
              <Image
                src={picURL}
                width={320}
                height={120}
                class="object-none object-center"
              />
          )}
          {(_.isNull(priceTo) || priceTo == '0.00') && 
            <h3>ราคา {_.toNumber(priceFrom).toLocaleString('th-TH')}</h3> 
          }
          {(!_.isEmpty(priceTo) && priceTo !== '0.00') && 
            <h3>ราคา {_.toNumber(priceFrom).toLocaleString('th-TH')} - {_.toNumber(priceTo).toLocaleString('th-TH')}</h3> 
          }

          <h5 style={{whiteSpace: "pre-wrap"}}>{(_.get(item, 'product_desc'))}</h5>
          <br/>
          <hr/>
          <br/>
          Comment ({_.size(mkpComment)})
          {(_.size(mkpComment) > 0) && _.map(mkpComment, (cm, key) => {
            return (
              <div>
                <h2>คอมเม้นที่ {key+1}</h2>
                <h3>{cm.comment}</h3>
                <h5>(Like {_.size(getCommentLike(cm.id))})</h5>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default MarketView