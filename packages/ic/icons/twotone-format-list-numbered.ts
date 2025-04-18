import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFormatListNumberedIcon],svg[ic-twotone-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v.9h3zm2-8h14v2H7zM5 16H2v1h2v.5H3v1h1v.5H2v1h3zm2 1h14v2H7zM3 8h1V4H2v1h1zm4 3h14v2H7z"></svg:path>`,
})
export class IcTwotoneFormatListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
