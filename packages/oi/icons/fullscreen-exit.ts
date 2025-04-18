import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiFullscreenExitIcon],svg[oi-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0L0 1l1.5 1.5L0 4h4V0L2.5 1.5zm3 4v4l1.5-1.5L7 8l1-1l-1.5-1.5L8 4z"></svg:path>`,
})
export class OiFullscreenExitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
