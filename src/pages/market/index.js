import React, { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { getAllItem } from '../../utils/marketApi'
import { swal } from '../../components/Modal'
import { setStore } from '../../redux/entitiesStore'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import _ from 'lodash'

const MarketIndex = () => {
  const [postItem, setPostItem] = useState({})

  useEffect(async() => {
    const postData = await getAllItem()
    if (!_.isEmpty(postData)) {
      setPostItem(postData)
      console.log({postData})
    }
  }, [setPostItem])

  return (
    <>
      <NextSeo
        title="Market Place"
      />
      <div className="w-full">
        <div class="grid grid-cols-4 gap-4">
          { !_.isEmpty(postItem) && _.map(postItem, (item) => {
            const postID = _.get(item, 'id')
            const link = `market/view/${postID}`
            return (
                <div class="card rounded-none">
                  {(!_.isEmpty(
                    _.get(item, 'market_place_picture.pic_url')) && 
                      <div class="flex flex-inline">
                        <Image
                          src={_.get(item, 'market_place_picture.pic_url')}
                          width={100}
                          height={64}
                          class="object-none object-center"
                        />
                        <h3 style={{paddingLeft: '10px'}}>
                          <Link href={link}>
                            {_.get(item, 'product_name')}
                          </Link>
                        </h3>
                      </div>
                  )}
                  <div>จำนวนคนกด Like {_.size(_.get(item, 'market_place_likes'))}</div>
                  <div>จำนวนคน Comment {_.size(_.get(item, 'market_place_comments'))}</div>
                  {(_.isNull(_.get(item, 'price_to')) || _.get(item, 'price_to') == '0.00') && 
                    <div>ราคา {_.toNumber(_.get(item, 'price_from')).toLocaleString('th-TH')}</div> 
                  }
                  {(!_.isEmpty(_.get(item, 'price_to')) && _.get(item, 'price_to') !== '0.00') && 
                    <div>ราคา {_.toNumber(_.get(item, 'price_from')).toLocaleString('th-TH')} - {_.toNumber(_.get(item, 'price_to')).toLocaleString('th-TH')}</div> 
                  }
                </div>
            )
          })}
          </div>
      </div>
    </>
  )
}

export default MarketIndex