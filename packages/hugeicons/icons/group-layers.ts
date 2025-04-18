import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGroupLayersIcon],svg[hugeicons-group-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0M6 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0M20 6v12m-2 2H6M18 4H6M4 6v12m6.65-9.52l-1.089.533C8.187 9.686 7.5 10.022 7.5 10.5s.687.814 2.061 1.487l1.089.533c.654.32.982.48 1.35.48s.696-.16 1.35-.48l1.089-.533c1.374-.673 2.061-1.009 2.061-1.487s-.687-.814-2.061-1.487L13.35 8.48C12.696 8.16 12.368 8 12 8s-.696.16-1.35.48m5.85 5.02c0 .478-.687.814-2.061 1.487l-1.089.533c-.654.32-.982.48-1.35.48s-.696-.16-1.35-.48l-1.089-.533C8.187 14.314 7.5 13.978 7.5 13.5" color="currentColor"></svg:path>`,
})
export class HugeiconsGroupLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
