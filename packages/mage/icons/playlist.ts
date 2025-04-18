import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlaylistIcon],svg[mage-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5.5h16m-16 6h16m-16 6h8m3.513-2.462v4.922a.54.54 0 0 0 .871.428l3.408-2.65a.54.54 0 0 0-.033-.877l-3.407-2.272a.54.54 0 0 0-.839.45"></svg:path>`,
})
export class MagePlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
