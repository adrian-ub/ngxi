import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatRightIcon],svg[gg-format-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zm1 5a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h16a1 1 0 0 0 1-1m-1 3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z"></svg:path>`,
})
export class GgFormatRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
