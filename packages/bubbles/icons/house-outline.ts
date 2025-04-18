import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesHouseOutlineIcon],svg[bubbles-house-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.272 23.247a.98.98 0 0 0 .978-.978V9.747a1.18 1.18 0 0 0-.377-.8L12 .747l-10.873 8.2c-.225.208-.36.495-.377.8V22.27a.98.98 0 0 0 .978.978z"></svg:path>`,
})
export class BubblesHouseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
