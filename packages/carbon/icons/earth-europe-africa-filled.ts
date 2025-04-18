import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEarthEuropeAfricaFilledIcon],svg[carbon-earth-europe-africa-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2M4 16a11.98 11.98 0 0 1 5-9.727V9a1 1 0 0 0 1 1h3.382a1 1 0 0 0 .894-.553L15 8h4v6h-5.764a1 1 0 0 0-.447.106l-3.236 1.618a1 1 0 0 0-.553.894v3.705a1 1 0 0 0 .629.929L14 23l.824 4.94A12.015 12.015 0 0 1 4 16m18 10.376V23l1.755-2.632a1 1 0 0 0 .138-.797L23 16v-3h4.605A11.9 11.9 0 0 1 22 26.376"></svg:path>`,
})
export class CarbonEarthEuropeAfricaFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
