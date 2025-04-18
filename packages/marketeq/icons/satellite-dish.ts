import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSatelliteDishIcon],svg[marketeq-satellite-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="m31.917 16l7.666-7.667"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M39.688 8.333h-.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="m12.5 43.75l7.083-18.23m8.709 5.293l5.041 12.937m-25 0H37.5M22.917 6.896a2.21 2.21 0 0 0-3.313.229a15.27 15.27 0 0 0 21.188 21.292a2.21 2.21 0 0 0 .229-3.313z"></svg:path></svg:g>`,
})
export class MarketeqSatelliteDishIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
