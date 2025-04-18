import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsAlignImageLeftIcon],svg[gridicons-align-image-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h18v2H3zm0 14h18v-2H3zm0-4h8V9H3zm10 0h8v-2h-8zm0-4h8V9h-8z"></svg:path>`,
})
export class GridiconsAlignImageLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
