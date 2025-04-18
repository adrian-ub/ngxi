import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLoopIcon],svg[oi-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0v1H1c-.55 0-1 .45-1 1v1h1V2h5v1l2-1.5zM2 4L0 5.5L2 7V6h5c.55 0 1-.45 1-1V4H7v1H2z"></svg:path>`,
})
export class OiLoopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
