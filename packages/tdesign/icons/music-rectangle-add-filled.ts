import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicRectangleAddFilledIcon],svg[tdesign-music-rectangle-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h12.39A5.5 5.5 0 0 1 22 14.39zm-7 5v2h-2v5.5a2.5 2.5 0 1 1-2-2.45V7z"></svg:path><svg:path fill="currentColor" d="M20 20h3v-2h-3v-3h-2v3h-3v2h3v3h2z"></svg:path>`,
})
export class TdesignMusicRectangleAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
