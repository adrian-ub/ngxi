import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSectionPlusIcon],svg[pixelarticons-section-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm4 0h2v2H7zm2 16H7v2h2zm2 0h2v2h-2zM5 7H3v2h2zm14 0h2v2h-2zm2 4h-2v2h2zM3 11h2v2H3zm2 4H3v2h2zm12 0h2v2h2v2h-2v2h-2v-2h-2v-2h2zM5 19H3v2h2zm6-16h2v2h-2zm6 0h-2v2h2zm4 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsSectionPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
