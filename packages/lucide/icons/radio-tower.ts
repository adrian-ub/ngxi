import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRadioTowerIcon],svg[lucide-radio-tower-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9m2.9 2.8a6.14 6.14 0 0 0-.8 7.5"></svg:path><svg:circle cx="12" cy="9" r="2"></svg:circle><svg:path d="M16.2 4.8c2 2 2.26 5.11.8 7.47M19.1 1.9a9.96 9.96 0 0 1 0 14.1m-9.6 2h5M8 22l4-11l4 11"></svg:path></svg:g>`,
})
export class LucideRadioTowerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
