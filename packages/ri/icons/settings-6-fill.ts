import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSettings6FillIcon],svg[ri-settings-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526zM8.634 8.17l5 8.66l1.732-1l-5-8.66z"></svg:path>`,
})
export class RiSettings6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
