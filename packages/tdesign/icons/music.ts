import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicIcon],svg[tdesign-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.913V18a3 3 0 1 1-2-2.83v-5.083L8 10.92V19a3 3 0 1 1-2-2.83V4.08zM6 19a1 1 0 1 0-2 0a1 1 0 0 0 2 0M8 8.913l10-.833V5.087L8 5.92zM18 18a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class TdesignMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
