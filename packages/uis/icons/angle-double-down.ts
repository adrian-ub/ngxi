import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleDownIcon],svg[uis-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.3 11.5c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 9.3L9.7 7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4zm3 1L12 14.8l-2.3-2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4c-.4-.3-1-.3-1.4 0"></svg:path>`,
})
export class UisAngleDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
