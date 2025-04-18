import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAngleLeftIcon],svg[uis-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.3 12l3.5-3.5c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"></svg:path>`,
})
export class UisAngleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
