import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonClosedCaptionAltIcon],svg[carbon-closed-caption-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h6v2h-6zm-8 0h6v2h-6zm-5 0h3v2H6zm16-4h4v2h-4zm-9 0h7v2h-7zm-7 0h5v2H6z"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"></svg:path>`,
})
export class CarbonClosedCaptionAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
