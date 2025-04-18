import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSprayPaintIcon],svg[carbon-spray-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 23a4.5 4.5 0 1 1 4.5-4.5a4.505 4.505 0 0 1-4.5 4.5m0-7a2.5 2.5 0 1 0 2.5 2.5a2.503 2.503 0 0 0-2.5-2.5"></svg:path><svg:path fill="currentColor" d="M28 8h-2V3h-7v5h-2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h11a2.003 2.003 0 0 0 2-2V10a2 2 0 0 0-2-2m-7-3h3v3h-3zm-4 23V10h11l.002 18zM2 14h3v3H2zm5-5h3v3H7zM2 9h3v3H2zm10-5h3v3h-3zM7 4h3v3H7zM2 4h3v3H2z"></svg:path>`,
})
export class CarbonSprayPaintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
