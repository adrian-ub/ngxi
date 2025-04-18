import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabChairsTableParasolIcon],svg[lucide-lab-chairs-table-parasol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m9-13H3l9-6ZM7 13h10m-9 8v-3a1 1 0 0 0-1-1H3m0-5v9m13 0v-3c0-.5.5-1 1-1h4m0-5v9"></svg:path>`,
})
export class LucideLabChairsTableParasolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
