import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTwoWayArrowsLineIcon],svg[clarity-two-way-arrows-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.43 16.83A1 1 0 0 0 22 18.24L25.72 22H7.83a1 1 0 0 0 0 2h17.89L22 27.7a1 1 0 1 0 1.42 1.41L29.53 23Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M13.24 18.45a1 1 0 0 0 .71-1.71L10.24 13h17.88a1 1 0 0 0 0-2H10.24l3.71-3.73a1 1 0 0 0-1.42-1.41L6.42 12l6.11 6.14a1 1 0 0 0 .71.31" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTwoWayArrowsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
