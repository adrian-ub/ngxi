import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayListIcon],svg[gg-play-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H4v2h12zm0 4H4v2h12zM4 13h8v2H4zm16 3l-6-3v6z"></svg:path>`,
})
export class GgPlayListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
