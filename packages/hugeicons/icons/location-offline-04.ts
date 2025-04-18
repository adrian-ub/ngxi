import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationOffline04Icon],svg[hugeicons-location-offline-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18c-1.435 1.483-3.388 2.726-5.073 3.757a1.89 1.89 0 0 1-1.854 0C7.203 19.362 3 15.914 3 10.926C3 8.834 3.755 7.03 5 5.5m2.5-2.272A8.9 8.9 0 0 1 12 2c4.87 0 9 4.033 9 8.926c0 1.691-.486 3.211-1.28 4.574M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsLocationOffline04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
