import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandViteIcon],svg[tabler-brand-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 4.5L16 3l-2 6.5l2-.5l-4 7v-5l-3 1z"></svg:path><svg:path d="M15 6.5L22 5L12 22L2 5l7.741 1.5"></svg:path></svg:g>`,
})
export class TablerBrandViteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
