import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNorthWestCircleFillIcon],svg[si-north-west-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9 13v-2.586l6.293 6.293a1 1 0 0 0 1.414-1.414L10.414 9H13a1 1 0 0 0 0-2H8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthWestCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
