import { AnyData } from '../../interfaces/utils'
import { IS_DEBUG } from '../../core'

export function push(data: AnyData) {
  if (!window.dataLayer) {
    window.dataLayer = []
  }

  IS_DEBUG && console.log('DataLayer push', data)
  return window.dataLayer.push(data)
}
