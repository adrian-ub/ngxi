import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAngleDownIcon],svg[uis-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.9 9.2c-.4-.4-1-.4-1.4 0L12 12.7L8.5 9.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3s.5-.1.7-.3l4.2-4.2c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
