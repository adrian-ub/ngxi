import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityViewColumnsLineIcon],svg[clarity-view-columns-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 5H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 29H5V7h8Zm10 0h-8V7h8Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityViewColumnsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
