import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMilkOffIcon],svg[tabler-milk-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6h6V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1m8 2l1.094 1.759a6 6 0 0 1 .906 3.17V14m0 4v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17l.327-.525"></svg:path><svg:path d="M10 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerMilkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
