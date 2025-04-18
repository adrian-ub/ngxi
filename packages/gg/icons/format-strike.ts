import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatStrikeIcon],svg[gg-format-strike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h4V5H7v2h4v3h2zm-2 12v-5h2v5zm-6-6h14v-2H5z"></svg:path>`,
})
export class GgFormatStrikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
