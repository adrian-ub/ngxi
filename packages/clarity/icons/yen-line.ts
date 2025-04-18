import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityYenLineIcon],svg[clarity-yen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.34 4.55a1 1 0 1 0-1.67-1.1L18 18.23L8.33 3.45a1 1 0 0 0-1.67 1.1L17 20.35v1.85h-5a.8.8 0 0 0 0 1.6h5v2.4h-5a.8.8 0 0 0 0 1.6h5V32a1 1 0 0 0 2 0v-4.2h5a.8.8 0 0 0 0-1.6h-5v-2.4h5a.8.8 0 0 0 0-1.6h-5v-1.85Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityYenLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
