import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAllOutIcon],svg[ic-twotone-all-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="5" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M4 4v4l4-4zm12 0l4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7m-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcTwotoneAllOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
