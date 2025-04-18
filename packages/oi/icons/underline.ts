import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiUnderlineIcon],svg[oi-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v4c0 1.1 1.12 2 2.5 2H4c1.1 0 2-.9 2-2V0H5v4c0 .55-.45 1-1 1s-1-.45-1-1V0zM0 7v1h7V7z"></svg:path>`,
})
export class OiUnderlineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
