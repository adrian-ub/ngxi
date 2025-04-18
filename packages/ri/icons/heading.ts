import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHeadingIcon],svg[ri-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></svg:path>`,
})
export class RiHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
