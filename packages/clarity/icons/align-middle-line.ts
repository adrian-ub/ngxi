import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAlignMiddleLineIcon],svg[clarity-align-middle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 17h-4v-6a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6h-4V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12H2a1 1 0 0 0 0 2h4v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V19h4v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6h4a1 1 0 0 0 0-2M14 30H8V6h6Zm14-6h-6V12h6Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAlignMiddleLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
