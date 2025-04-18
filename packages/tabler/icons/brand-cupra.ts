import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCupraIcon],svg[tabler-brand-cupra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.5 10L2 6l15.298 6.909a.2.2 0 0 1 .09.283L14 19"></svg:path><svg:path d="m10 19l-3.388-5.808a.2.2 0 0 1 .09-.283L22 6l-2.5 4"></svg:path></svg:g>`,
})
export class TablerBrandCupraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
