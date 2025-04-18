import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleLeftIcon],svg[uis-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.3L14.7 12L17 9.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3c.3-.4.3-1 0-1.4M9.2 12l2.3-2.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"></svg:path>`,
})
export class UisAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
