import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityShieldXSolidIcon],svg[clarity-shield-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.25 7.4a44 44 0 0 1-6.62-2.35a45 45 0 0 1-6.08-3.21L18 1.5l-.54.35a45 45 0 0 1-6.08 3.21A44 44 0 0 1 4.75 7.4L4 7.59v8.34c0 13.39 13.53 18.4 13.66 18.45l.34.12l.34-.12c.14 0 13.66-5.05 13.66-18.45V7.59Zm-6.74 14.15a1.4 1.4 0 0 1-2 2L18 19l-4.53 4.53a1.43 1.43 0 0 1-2 0a1.4 1.4 0 0 1 0-2L16 17l-4.53-4.53a1.4 1.4 0 1 1 2-2L18 15l4.53-4.53a1.4 1.4 0 0 1 2 2L20 17Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityShieldXSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
