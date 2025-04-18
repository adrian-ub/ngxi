import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrophyIcon],svg[pixelarticons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H6v2H2v10h6V5h8v10h6V5h-4V3zm4 4v6h-2V7zM6 13H4V7h2zm12 2H6v2h12zm-7 2h2v2h3v2H8v-2h3z"></svg:path>`,
})
export class PixelarticonsTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
