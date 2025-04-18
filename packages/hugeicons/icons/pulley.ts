import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPulleyIcon],svg[hugeicons-pulley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 3h18"></svg:path><svg:circle cx="15.5" cy="10.5" r="3.5"></svg:circle><svg:circle cx="8.5" cy="17.5" r="3.5"></svg:circle><svg:path d="M5 17.5V3m7 14.5v-7M15.5 7V3M19 17v-6.5m0 6.5c-.714 0-1.097.2-1.383.896c-.373.908-.826 2.254-.511 2.807c.168.297.554.297 1.325.297h1.137c.772 0 1.158 0 1.326-.297c.315-.553-.138-1.9-.51-2.807C20.11 17.232 19.741 17 19 17"></svg:path></svg:g>`,
})
export class HugeiconsPulleyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
