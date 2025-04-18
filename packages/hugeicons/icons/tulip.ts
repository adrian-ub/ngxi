import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTulipIcon],svg[hugeicons-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a6 6 0 0 1 6-6m-6 6a6 6 0 0 0-6-6m6-2v9m0-9a5 5 0 0 0 5-5V4a5 5 0 0 0-5 5m2.5-4.5C14 3 12 2 12 2s-2 1-2.5 2.5M12 13a5 5 0 0 1-5-5V4a4.98 4.98 0 0 1 3.5 1.43" color="currentColor"></svg:path>`,
})
export class HugeiconsTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
