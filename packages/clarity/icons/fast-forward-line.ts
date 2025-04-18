import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFastForwardLineIcon],svg[clarity-fast-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.77 31.92a2 2 0 0 1-.86-.2a1.81 1.81 0 0 1-.91-1.79v-6.7L5.24 31.5a1.94 1.94 0 0 1-2.06.22a2 2 0 0 1-1.11-1.79v-24a2 2 0 0 1 1.11-1.81a1.93 1.93 0 0 1 2.06.22L16 12.61v-6.7a1.81 1.81 0 0 1 .91-1.79a1.93 1.93 0 0 1 2.09.22l15.32 12a2 2 0 0 1 0 3.15L19 31.5a2 2 0 0 1-1.23.42m0-12.8v10.81l15.26-12l-15.32-12l.06 10.81L4 5.91v24Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFastForwardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
