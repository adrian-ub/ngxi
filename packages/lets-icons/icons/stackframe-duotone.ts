import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStackframeDuotoneIcon],svg[lets-icons-stackframe-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-width="1.2" d="M5 8c0-.943 0-1.414.293-1.707S6.057 6 7 6h6.063c.46 0 .691 0 .893.094c.201.095.349.272.644.626l3.333 4c.51.612.765.918.765 1.28s-.255.668-.765 1.28l-3.333 4c-.295.354-.443.531-.644.626c-.202.094-.432.094-.893.094H7c-.943 0-1.414 0-1.707-.293S5 16.943 5 16z"></svg:path>`,
})
export class LetsIconsStackframeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
