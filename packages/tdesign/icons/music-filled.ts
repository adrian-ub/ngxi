import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicFilledIcon],svg[tdesign-music-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.913V18a3 3 0 1 1-2-2.83V8.088L8 8.92V19a3 3 0 1 1-2-2.83V4.08z"></svg:path>`,
})
export class TdesignMusicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
