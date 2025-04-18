import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSolarSystem01Icon],svg[hugeicons-solar-system-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 6.73A9.95 9.95 0 0 0 2 12c0 5.523 4.477 10 10 10a10 10 0 0 0 3-.458m5.353-4.042A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10a10 10 0 0 0-3 .458"></svg:path><svg:circle cx="5" cy="5" r="2"></svg:circle><svg:circle cx="19" cy="19" r="2"></svg:circle><svg:circle cx="8" cy="15" r="2"></svg:circle><svg:path d="M12 17a5 5 0 1 0-4.9-4m4.909-1H12"></svg:path></svg:g>`,
})
export class HugeiconsSolarSystem01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
