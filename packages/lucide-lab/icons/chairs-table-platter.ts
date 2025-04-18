import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabChairsTablePlatterIcon],svg[lucide-lab-chairs-table-platter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V5m-4 5a4 4 0 0 1 8 0M6 10h12m-6 0v9m-4 0v-4c0-.6-.4-1-1-1H2m0-6v11m14 0v-4a1 1 0 0 1 1-1h5m0-6v11"></svg:path>`,
})
export class LucideLabChairsTablePlatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
