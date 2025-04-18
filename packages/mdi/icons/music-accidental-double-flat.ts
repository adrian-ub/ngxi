import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalDoubleFlatIcon],svg[mdi-music-accidental-double-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 9c-.7 0-1.39.28-2 .67V5h-2v4.62c-.46-.38-1.11-.62-2-.62c-.7 0-1.39.28-2 .67V5h-2v14c3-1.68 4.93-3.21 6-4.59V19c4.86-2.74 7-5.09 7-7c0-1.41-.71-3-3-3m-8 6.38v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38m6 0v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38"></svg:path>`,
})
export class MdiMusicAccidentalDoubleFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
