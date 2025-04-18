import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMusicRectangleAddIcon],svg[tdesign-music-rectangle-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v11h-2V4H4v16h9v2H2zm10 5h4v2h-2v5a3 3 0 1 1-2-2.83zm0 7a1 1 0 1 0-2 0a1 1 0 0 0 2 0m8 1v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class TdesignMusicRectangleAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
