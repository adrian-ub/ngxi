import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeezerAudiobooksIcon],svg[arcticons-deezer-audiobooks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.25h8.211v35.5H4.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.923 32.63v9.12h-8.212V6.25h8.212v16.899m0 0v-9.12h8.211V41.75h-8.211v-9.12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.133 19.24l7.892-2.27l6.474 22.51l-7.89 2.27zm.001 8.65l-16.423-9.482v18.963z"></svg:path>`,
})
export class ArcticonsDeezerAudiobooksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
