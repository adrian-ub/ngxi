import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAxeIcon],svg[tabler-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 9l7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 12"></svg:path><svg:path d="m6.66 15.66l-3.32-3.32a1.25 1.25 0 0 1 .42-2.044L7 9l6-6l3 3l-6 6l-1.296 3.24a1.25 1.25 0 0 1-2.044.42"></svg:path></svg:g>`,
})
export class TablerAxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
