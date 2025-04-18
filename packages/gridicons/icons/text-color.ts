import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsTextColorIcon],svg[gridicons-text-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v3H3zm12.82-2h3.424L14 3h-4L4.756 17h3.425l1.066-3.5h5.506zm-1.952-6h-3.73l1.868-5.725z"></svg:path>`,
})
export class GridiconsTextColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
