import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicBoxMultipleOutlineIcon],svg[mdi-music-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12m-7.5 11a2.5 2.5 0 0 0 2.5-2.5V7h3V5h-4v5.5c-.42-.31-.93-.5-1.5-.5a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5M4 6H2v14a2 2 0 0 0 2 2h14v-2H4"></svg:path>`,
})
export class MdiMusicBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
