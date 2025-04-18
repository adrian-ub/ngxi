import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicOffIcon],svg[mdi-music-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22L9 12.27v5.23A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34v-4.07zM21 3v12.5c0 1-.43 1.92-1.12 2.56l-4.94-4.94c.64-.69 1.56-1.12 2.56-1.12c.54 0 1.05.12 1.5.34V6.47l-8.83 1.88l-2.51-2.51z"></svg:path>`,
})
export class MdiMusicOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
