import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSuperhumanIcon],svg[tabler-brand-superhuman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 12l4 3l-8 7l-8-7l4-3"></svg:path><svg:path d="M12 3L4 9l8 6l8-6zm0 12h8"></svg:path></svg:g>`,
})
export class TablerBrandSuperhumanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
