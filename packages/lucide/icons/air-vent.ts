import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAirVentIcon],svg[lucide-air-vent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 8h12m.3 9.7a2.5 2.5 0 0 1-3.16 3.83a2.53 2.53 0 0 1-1.14-2V12m-7.4 3.6A2 2 0 1 0 10 17v-5"></svg:path>`,
})
export class LucideAirVentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
