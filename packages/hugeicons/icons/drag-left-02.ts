import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragLeft02Icon],svg[hugeicons-drag-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8.508 13.653l1.97 1.72V6.5c0-.83.673-1.501 1.504-1.501c.83 0 1.503.671 1.503 1.5l.004 4.763l2.641.427c1.705.26 2.558.389 3.158.753c.992.601 1.71 1.557 1.71 2.823c0 .918-.223 1.534-.769 3.19c-.346 1.05-.519 1.575-.8 1.99a3.54 3.54 0 0 1-1.939 1.414c-.479.14-1.026.14-2.12.14h-.927c-1.454 0-2.182 0-2.83-.27a4 4 0 0 1-.34-.164c-.614-.338-1.073-.91-1.99-2.052l-2.97-3.698a1.57 1.57 0 0 1-.007-1.954a1.525 1.525 0 0 1 2.202-.21"></svg:path><svg:path d="M13.923 9.5A3.998 3.998 0 0 0 11.98 2a3.998 3.998 0 0 0-1.942 7.5m-2.22-3.477H3.001m0 0c0 .47.515.694.837.988l1.18.999M3 6.023c0-.47.523-.724.837-1.022l1.18-1.011"></svg:path></svg:g>`,
})
export class HugeiconsDragLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
