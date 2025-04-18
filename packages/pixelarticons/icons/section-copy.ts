import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionCopyIcon],svg[pixelarticons-section-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm2 4h2v2H7zm4 0h2v2h-2zm2 12h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zM7 11h2v2H7zm14 0h-2v2h2zm-2 4h2v2h-2zM7 19h2v2H7zM19 7h2v2h-2zM7 3h2v2H7zm2 12H7v2h2zM3 7h2v2H3zm14 0h-2v2h2zM3 11h2v2H3zm2 4H3v2h2zm6-12h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
