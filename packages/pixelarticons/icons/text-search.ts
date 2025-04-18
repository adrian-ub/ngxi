import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTextSearchIcon],svg[pixelarticons-text-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4v2h16zm0 4H4v2h16zm-8 4H4v2h8zm8 0h-6v6h6v2h2v-2h-2zm-4 4v-2h2v2zm-4 0H4v2h8z"></svg:path>`,
})
export class PixelarticonsTextSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
