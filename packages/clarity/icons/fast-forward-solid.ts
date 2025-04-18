import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFastForwardSolidIcon],svg[clarity-fast-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.71 32a2 2 0 0 1-.86-.2A1.77 1.77 0 0 1 16 30v-6.7L5.17 31.58a1.94 1.94 0 0 1-2.06.22A2 2 0 0 1 2 30V6a2 2 0 0 1 1.11-1.8a1.93 1.93 0 0 1 2.06.22L16 12.69V6a1.77 1.77 0 0 1 .85-1.79a1.93 1.93 0 0 1 2.06.22l15.32 12a2 2 0 0 1 0 3.15l-15.32 12a2 2 0 0 1-1.2.42" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFastForwardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
