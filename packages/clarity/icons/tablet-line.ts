import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTabletLineIcon],svg[clarity-tablet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 29h2v2h-2z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30 2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 2v22.38H6V4ZM6 32v-4h24v4Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTabletLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
