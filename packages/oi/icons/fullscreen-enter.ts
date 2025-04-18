import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiFullscreenEnterIcon],svg[oi-fullscreen-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v4l1.5-1.5L3 4l1-1l-1.5-1.5L4 0zm5 4L4 5l1.5 1.5L4 8h4V4L6.5 5.5z"></svg:path>`,
})
export class OiFullscreenEnterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
