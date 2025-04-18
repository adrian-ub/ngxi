import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSettings6LineIcon],svg[ri-settings-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12zM8.634 8.17l1.732-1l5 8.66l-1.732 1z"></svg:path>`,
})
export class RiSettings6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
