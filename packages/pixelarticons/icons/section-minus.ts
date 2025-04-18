import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionMinusIcon],svg[pixelarticons-section-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm4 0H7v2h2zM7 19h2v2H7zm6 0h-2v2h2zM3 7h2v2H3zm18 0h-2v2h2zm-2 4h2v2h-2zM5 11H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm6-16h2v2h-2zm6 0h-2v2h2zm2 0h2v2h-2zm2 14h-6v2h6z"></svg:path>`,
})
export class PixelarticonsSectionMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
