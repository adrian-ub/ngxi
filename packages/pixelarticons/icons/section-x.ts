import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionXIcon],svg[pixelarticons-section-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm4 0H7v2h2zM7 19h2v2H7zm6 0h-2v2h2zM3 7h2v2H3zm18 0h-2v2h2zm-2 4h2v2h-2zm2 8h-2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2zM3 11h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zM13 3h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
