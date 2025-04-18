import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSpeed02Icon],svg[hugeicons-dashboard-speed-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="18" r="3"></svg:circle><svg:path d="M12 15v-5m10 3c0-5.523-4.477-10-10-10S2 7.477 2 13"></svg:path></svg:g>`,
})
export class HugeiconsDashboardSpeed02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
