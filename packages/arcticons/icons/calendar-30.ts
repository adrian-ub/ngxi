import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendar30Icon],svg[arcticons-calendar-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.541 30.667c0 2.963 2.37 5.333 5.333 5.333s5.136-2.37 5.136-5.333v-5.334c0-2.963-2.37-5.333-5.136-5.333s-5.333 2.37-5.333 5.333zm-13.549 4.111c1.104.926 2.297 1.35 4.975 1.35h.624a4 4 0 0 0 3.999-4h0a4 4 0 0 0-4-3.998m-5.6-6.666c1.107-.922 2.3-1.343 4.979-1.336l.622.004a4 4 0 0 1 3.999 3.999h0a4 4 0 0 1-4 3.999m-3.073 0h3.074"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="32.5" cy="11" r="2.5"></svg:circle><svg:circle cx="15.5" cy="11" r="2.5"></svg:circle><svg:rect width="37" height="37" x="5.5" y="5.5" rx="4" ry="4"></svg:rect></svg:g>`,
})
export class ArcticonsCalendar30Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
