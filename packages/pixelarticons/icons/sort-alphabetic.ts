import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSortAlphabeticIcon],svg[pixelarticons-sort-alphabetic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v2h-2zm0 2v2H9V4zm2 0h2v2h-2zM9 18v2h2v2h2v-2h2v-2h-2v2h-2v-2zM8 8H2v8h2v-2h2v2h2zm-2 4H4v-2h2zm6-1v-1h2v1zm4-3h-6v8h6zm-4 6v-1h2v1zm10-6h-4v8h4v-2h-2v-4h2z"></svg:path>`,
})
export class PixelarticonsSortAlphabeticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
