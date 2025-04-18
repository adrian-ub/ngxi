import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiHistoryIcon],svg[ooui-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v5h.06l2.48 2.47l1.41-1.41L11 10.11V6z"></svg:path><svg:path fill="currentColor" d="M10 1a9 9 0 0 0-7.85 13.35L.5 16H6v-5.5l-2.38 2.38A7 7 0 1 1 10 17v2a9 9 0 0 0 0-18"></svg:path>`,
})
export class OouiHistoryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
