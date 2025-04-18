import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBoxIcon],svg[gg-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 12a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v3h18V5a1 1 0 0 0-1-1M3 19v-9h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
