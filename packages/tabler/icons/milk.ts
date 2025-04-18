import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMilkIcon],svg[tabler-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 6h8V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zm8 0l1.094 1.759a6 6 0 0 1 .906 3.17V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17L8 6"></svg:path><svg:path d="M10 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0-6h4"></svg:path></svg:g>`,
})
export class TablerMilkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
