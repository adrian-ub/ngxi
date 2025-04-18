import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMusicRestEighthIcon],svg[mdi-music-rest-eighth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a5.56 5.56 0 0 1-3.05 1.86A1.5 1.5 0 1 0 9.5 9h.24a6.3 6.3 0 0 0 3.51-1.07L10 18h2l4-12Z"></svg:path>`,
})
export class MdiMusicRestEighthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
