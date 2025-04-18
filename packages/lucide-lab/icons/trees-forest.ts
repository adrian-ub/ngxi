import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTreesForestIcon],svg[lucide-lab-trees-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5l3-3l3 3m-6 5l3-3l3 3m-3 2V2M2 15l3-3l3 3m-6 5l3-3l3 3m-3 2V12m11 3l3-3l3 3m-6 5l3-3l3 3m-3 2V12"></svg:path>`,
})
export class LucideLabTreesForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
