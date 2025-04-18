import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlaylistAlternateIcon],svg[mage-playlist-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.5h8m-16 6h16m-16 6h16M4 4.038V8.96a.54.54 0 0 0 .87.428l3.409-2.65a.54.54 0 0 0-.033-.877L4.838 3.589A.54.54 0 0 0 4 4.04"></svg:path>`,
})
export class MagePlaylistAlternateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
