import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionIcon],svg[pixelarticons-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm4 0H7v2h2zM7 19h2v2H7zM5 7H3v2h2zm14 0h2v2h-2zM5 11H3v2h2zm14 0h2v2h-2zM5 15H3v2h2zm14 0h2v2h-2zM5 19H3v2h2zm6-16h2v2h-2zm2 16h-2v2h2zm2-16h2v2h-2zm2 16h-2v2h2zm2-16h2v2h-2zm2 16h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
