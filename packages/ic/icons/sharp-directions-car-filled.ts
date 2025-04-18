import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsCarFilledIcon],svg[ic-sharp-directions-car-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.57 5H5.43L3 12v9h3v-2h12v2h3v-9zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5.81 10l1.04-3h10.29l1.04 3z"></svg:path>`,
})
export class IcSharpDirectionsCarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
