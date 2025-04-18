import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsAlignImageRightIcon],svg[gridicons-align-image-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3V5h18zm0 10H3v2h18zm0-8h-8v6h8zm-10 4H3v2h8zm0-4H3v2h8z"></svg:path>`,
})
export class GridiconsAlignImageRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
