import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoupon02Icon],svg[hugeicons-coupon-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.832 21.348l-.519-.69c-.455-.607-1.423-.558-1.807.09c-.54.912-2.006.549-2.006-.496V3.748c0-1.045 1.466-1.408 2.006-.497c.384.649 1.352.698 1.807.091l.519-.69c.653-.87 2.017-.87 2.67 0l.081.109c.693.922 2.14.922 2.834 0l.081-.109c.653-.87 2.017-.87 2.67 0l.519.69c.455.607 1.423.558 1.807-.09c.54-.911 2.006-.549 2.006.496v16.504c0 1.045-1.466 1.408-2.006.497c-.384-.649-1.352-.698-1.807-.091l-.518.69c-.654.87-2.018.87-2.67 0l-.082-.109c-.693-.922-2.14-.922-2.834 0l-.081.109c-.653.87-2.017.87-2.67 0M15 9l-6 6m6 0h-.009M9.009 9H9" color="currentColor"></svg:path>`,
})
export class HugeiconsCoupon02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
