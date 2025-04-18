import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizCircleFillIcon],svg[si-more-horiz-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M5 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreHorizCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
