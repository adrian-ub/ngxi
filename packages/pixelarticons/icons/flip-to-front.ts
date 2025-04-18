import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFlipToFrontIcon],svg[pixelarticons-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H7v14h14zm-2 12H9V5h10zM5 7H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zm6 0H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsFlipToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
