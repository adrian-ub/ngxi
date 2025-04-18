import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHotelIcon],svg[zmdi-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 213q-27 0-45.5-18.5t-18.5-45T82.5 104T128 85t45.5 19t18.5 45.5t-18.5 45T128 213M384 85q35 0 60 25t25 61v192h-42v-64H43v64H0V43h43v192h170V85z"></svg:path>`,
})
export class ZmdiHotelIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
