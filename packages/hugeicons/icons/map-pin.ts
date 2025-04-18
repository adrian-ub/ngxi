import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMapPinIcon],svg[hugeicons-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 9.002c-2.175.013-3.353.118-4.121.95C2 10.904 2 12.436 2 15.5s0 4.596.879 5.548C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.952S22 18.564 22 15.5s0-4.596-.879-5.548c-.768-.832-1.946-.937-4.121-.95M6 12l4.5 2.625M18 19l-4.2-2.45m0 0l4.2-2.8m-4.2 2.8l-3.3-1.925m0 0L6 17.6M12 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 0v4" color="currentColor"></svg:path>`,
})
export class HugeiconsMapPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
