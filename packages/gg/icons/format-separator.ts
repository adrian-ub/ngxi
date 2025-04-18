import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatSeparatorIcon],svg[gg-format-separator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 5a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zm0 2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm1 5a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1m-1 9a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2z" opacity=".5"></svg:path><svg:path fill-rule="evenodd" d="M21 16a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFormatSeparatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
