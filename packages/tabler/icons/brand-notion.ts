import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandNotionIcon],svg[tabler-brand-notion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 17.5V11h.5l4 6h.5v-6.5"></svg:path><svg:path d="m19.077 20.071l-11.53.887a1 1 0 0 1-.876-.397L4.2 17.267a1 1 0 0 1-.2-.6V5.926a1 1 0 0 1 .923-.997l11.389-.876a2 2 0 0 1 1.262.33l1.535 1.023A2 2 0 0 1 20 7.07v12.004a1 1 0 0 1-.923.997M4.5 5.5L7 8"></svg:path><svg:path d="M20 7L7 8v12.5"></svg:path></svg:g>`,
})
export class TablerBrandNotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
