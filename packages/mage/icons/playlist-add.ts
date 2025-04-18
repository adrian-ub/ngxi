import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlaylistAddIcon],svg[mage-playlist-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4 4.75h16m-16 6h16m-16 6h8"></svg:path><svg:path stroke-miterlimit="10" d="M17.745 14.5V19M15.5 16.755H20"></svg:path></svg:g>`,
})
export class MagePlaylistAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
