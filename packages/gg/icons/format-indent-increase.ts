import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatIndentIncreaseIcon],svg[gg-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7H4V5h16zm0 4h-8V9h8zm-8 4h8v-2h-8zm-8 0l5-3l-5-3zm0 2v2h16v-2z"></svg:path>`,
})
export class GgFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
