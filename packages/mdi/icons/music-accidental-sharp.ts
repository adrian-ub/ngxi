import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicAccidentalSharpIcon],svg[mdi-music-accidental-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9.5v-2l-2 .6V5.5h-2v3.2l-2 .6V6.5H9v3.4l-2 .6v2l2-.6v2l-2 .6v2l2-.6v2.6h2v-3.2l2-.6v2.8h2v-3.4l2-.6v-2l-2 .6v-2zm-4 3.2l-2 .6v-2l2-.6z"></svg:path>`,
})
export class MdiMusicAccidentalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
