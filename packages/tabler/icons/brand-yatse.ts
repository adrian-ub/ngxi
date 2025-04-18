import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandYatseIcon],svg[tabler-brand-yatse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 3l5 2.876v5.088l4.197-2.73L21 10.965l-9.281 5.478l-2.383 1.41l-2.334 1.377l-3 1.77v-5.565l3-1.771z"></svg:path>`,
})
export class TablerBrandYatseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
