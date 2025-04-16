import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUsbIcon],svg[lucide-usb-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="10" cy="7" r="1"></svg:circle><svg:circle cx="4" cy="20" r="1"></svg:circle><svg:path d="M4.7 19.3L19 5m2-2l-3 1l2 2ZM9.26 7.68L5 12l2 5m3-3l5 2l3.5-3.5"></svg:path><svg:path d="m18 12l1-1l1 1l-1 1Z"></svg:path></svg:g>`,
})
export class LucideUsbIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
