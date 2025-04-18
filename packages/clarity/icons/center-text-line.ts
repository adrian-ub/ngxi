import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCenterTextLineIcon],svg[clarity-center-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.88 8H5.12a1.1 1.1 0 0 0 0 2.2h25.76a1.1 1.1 0 1 0 0-2.2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M25.5 16.2a1.1 1.1 0 1 0 0-2.2h-15a1.1 1.1 0 1 0 0 2.2Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M30.25 20H5.75a1.1 1.1 0 0 0 0 2.2h24.5a1.1 1.1 0 0 0 0-2.2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M24.88 26H11.12a1.1 1.1 0 1 0 0 2.2h13.76a1.1 1.1 0 1 0 0-2.2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCenterTextLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
