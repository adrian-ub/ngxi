import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleUpIcon],svg[uis-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.7 12.5c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.3-2.3l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zm-3-1L12 9.2l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4c.4.3 1 .3 1.4 0"></svg:path>`,
})
export class UisAngleDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
