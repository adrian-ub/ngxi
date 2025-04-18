import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAutomaticGearboxIcon],svg[tabler-automatic-gearbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 17v4h1a2 2 0 1 0 0-4zm0-6h1.5a1.5 1.5 0 0 0 0-3H17v5M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3m-4-8h4"></svg:path></svg:g>`,
})
export class TablerAutomaticGearboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
