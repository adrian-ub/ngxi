import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGps02Icon],svg[hugeicons-gps-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.514 12a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m1.986 0h-2m-17 0h-2M12 1.5v2m0 17v2" color="currentColor"></svg:path>`,
})
export class HugeiconsGps02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
