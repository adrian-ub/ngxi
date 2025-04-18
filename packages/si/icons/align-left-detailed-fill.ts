import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftDetailedFillIcon],svg[si-align-left-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14h3.8a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 17.4m0-9V6.6A1.6 1.6 0 0 1 8.6 5h11.8A1.6 1.6 0 0 1 22 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 8.4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignLeftDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
