import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicBoxMultipleIcon],svg[mdi-music-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4M18 7h-3v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.5V5h4m2-3H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMusicBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
