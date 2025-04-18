import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignRightDetailedFillIcon],svg[si-align-right-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-3.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6m0-9V6.6A1.6 1.6 0 0 0 15.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h11.8A1.6 1.6 0 0 0 17 8.4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignRightDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
