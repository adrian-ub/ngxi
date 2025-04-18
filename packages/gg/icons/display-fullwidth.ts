import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDisplayFullwidthIcon],svg[gg-display-fullwidth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 5h20V3H2zm0 16h20v-2H2z"></svg:path><svg:path fill-rule="evenodd" d="M2 7v10h20V7zm2 2h16v6H4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDisplayFullwidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
