import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeFlattrIcon],svg[icomoon-free-flattr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.743 0C1.941 0 0 2.19 0 6.279v8.579l3.725-3.729V6.771c0-1.694.449-2.772 1.955-3.014c.526-.103 1.621-.067 2.317-.067v2.587a.247.247 0 0 0 .245.269q.094-.001.184-.093L14.881 0L5.742-.001zm6.532 4.871v4.358c0 1.694-.449 2.772-1.955 3.014c-.526.103-1.621.067-2.317.067V9.723a.4.4 0 0 0-.009-.087a.246.246 0 0 0-.236-.182q-.094.002-.184.093L1.119 16l9.139.001c3.802 0 5.743-2.19 5.743-6.279V1.143l-3.725 3.729z"></svg:path>`,
})
export class IcomoonFreeFlattrIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
