import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGravityIcon],svg[hugeicons-gravity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22a6 6 0 1 0 0-12a6 6 0 0 0 0 12M7 2v2m10-2v2m-5-2v5.5m0 0c.5-.008 1.134-.938 2.06-1.997M12 7.5c-.5-.008-.816-.688-1.94-1.997" color="currentColor"></svg:path>`,
})
export class HugeiconsGravityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
