import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHouseWifiIcon],svg[lucide-house-wifi-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.5 13.866a4 4 0 0 1 5 .01M12 17h.01"></svg:path><svg:path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M7 10.754a8 8 0 0 1 10 0"></svg:path></svg:g>`,
})
export class LucideHouseWifiIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
