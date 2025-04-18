import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestaurant02Icon],svg[hugeicons-restaurant-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10L4 21.001m14-18l-3 3c-.545.545-.818.818-.964 1.112a2 2 0 0 0 0 1.776c.146.294.419.567.964 1.112s.818.818 1.112.964a2 2 0 0 0 1.776 0c.294-.146.567-.419 1.112-.964l3-3m-2-2.002l-3 3M8.845 9.846c-1.365 1.365-3.237 1.706-4.944 0c-1.706-1.707-2.6-4.814-1.235-6.18c1.365-1.364 4.472-.47 6.179 1.236c1.706 1.707 1.365 3.579 0 4.944m0 0L20 21" color="currentColor"></svg:path>`,
})
export class HugeiconsRestaurant02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
