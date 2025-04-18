import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoordinate02Icon],svg[hugeicons-coordinate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 2L12 3.5m0 0V5m0-1.5L10.5 2M2 14h3l-3 3h3m14-3l3 3m0-3l-3 3m-7-9v8m0 0l-9 6m9-6l9 6" color="currentColor"></svg:path>`,
})
export class HugeiconsCoordinate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
