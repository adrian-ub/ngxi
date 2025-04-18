import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoMobileIcon],svg[entypo-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.004 0H5.996A1.996 1.996 0 0 0 4 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0 0 16 18.004V1.996A1.996 1.996 0 0 0 14.004 0M10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1s1.25.447 1.25 1s-.56 1-1.25 1m4-3H6V2h8z"></svg:path>`,
})
export class EntypoMobileIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
