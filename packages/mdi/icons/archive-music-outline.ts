import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMusicOutlineIcon],svg[mdi-archive-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v6h18zm-2 4H5V5h14zm-1 4v-1h2v1zm-3.5 0c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5zm-1.24 8c-.17.47-.26.97-.26 1.5c0 .17 0 .34.03.5H4V10h2v9zM22 13v2h-2v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 3.5-2.29V13z"></svg:path>`,
})
export class MdiArchiveMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
