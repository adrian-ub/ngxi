import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNodeLineIcon],svg[clarity-node-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 30.66L7 24.33V11.67l11-6.33l11 6.33v12.66Zm-9-7.48l9 5.17l9-5.17V12.82l-9-5.17l-9 5.17Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNodeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
