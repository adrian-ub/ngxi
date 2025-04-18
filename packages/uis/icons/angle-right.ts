import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAngleRightIcon],svg[uis-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 17.2c-.6 0-1-.4-1-1c0-.3.1-.5.3-.7l3.5-3.5l-3.5-3.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3"></svg:path>`,
})
export class UisAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
