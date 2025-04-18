import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandWindyIcon],svg[tabler-brand-windy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 4c0 5.5-.33 16 4 16s7.546-11.27 8-13"></svg:path><svg:path d="M3 4c.253 5.44 1.449 16 5.894 16C13.338 20 17.314 9.964 18 6"></svg:path></svg:g>`,
})
export class TablerBrandWindyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
