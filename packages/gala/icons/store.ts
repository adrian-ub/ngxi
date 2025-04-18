import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaStoreIcon],svg[gala-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="16"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 48.000545,207.99268 V 128"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 207.99947,207.99946 V 127.8564"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 32.000626,16.00074 H 223.99935"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 183.99963,100.00018 a 27.999813,27.999813 0 0 1 -13.99991,24.24855 27.999813,27.999813 0 0 1 -27.99981,0 A 27.999813,27.999813 0 0 1 128,100.00018"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 239.99926,100.00018 a 27.999813,27.999813 0 0 1 -13.9999,24.24855 27.999813,27.999813 0 0 1 -27.99982,0 27.999813,27.999813 0 0 1 -13.9999,-24.24855"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 72.000366,100.00067 a 27.999813,27.999813 0 0 1 -13.999907,24.24855 27.999813,27.999813 0 0 1 -27.999813,0 27.999813,27.999813 0 0 1 -13.999906,-24.24855"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 128,100.00067 a 27.999813,27.999813 0 0 1 -13.99991,24.24855 27.999813,27.999813 0 0 1 -27.999814,0 27.999813,27.999813 0 0 1 -13.999906,-24.24855"></svg:path><svg:path d="M 16.000734,100.00252 32.000626,16.00074"></svg:path><svg:path d="m 223.99935,16.00074 15.99989,83.99945"></svg:path><svg:path d="M 183.99963,100.00108 175.99967,16.00074"></svg:path><svg:path d="M 72.000386,100.00067 80.000307,16.00074"></svg:path><svg:path d="M 127.99999,100.00093 V 16.00074"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 32.000626,191.99958 H 223.99935"></svg:path><svg:path d="M 80.000307,239.99926 H 175.99967"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 207.99944,207.99947 a 31.999786,31.999786 0 0 1 -31.99979,31.99978"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M -48.000534,207.99947 A 31.999786,31.999786 0 0 1 -80.00032,239.99925" transform="scale(-1 1)"></svg:path></svg:g>`,
})
export class GalaStoreIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
