import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCopyLineIcon],svg[clarity-copy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.5 7h-19A1.5 1.5 0 0 0 9 8.5v24a1.5 1.5 0 0 0 1.5 1.5h19a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 29.5 7M29 32H11V9h18Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M26 3.5A1.5 1.5 0 0 0 24.5 2h-19A1.5 1.5 0 0 0 4 3.5v24A1.5 1.5 0 0 0 5.5 29H6V4h20Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCopyLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
