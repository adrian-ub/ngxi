import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalDoubleSharpIcon],svg[mdi-music-accidental-double-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.41 10H17V7h-3v1.59l-2 2l-2-2V7H7v3h1.59l2 2l-2 2H7v3h3v-1.59l2-2l2 2V17h3v-3h-1.59l-2-2z"></svg:path>`,
})
export class MdiMusicAccidentalDoubleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
