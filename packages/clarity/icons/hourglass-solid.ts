import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHourglassSolidIcon],svg[clarity-hourglass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.67 4h22a1 1 0 0 0 0-2h-22a1 1 0 1 0 0 2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M28.67 32h-22a1 1 0 0 0 0 2h22a1 1 0 1 0 0-2" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M22.55 15.67A6.07 6.07 0 0 0 25 11.12V6H10.06v5.12a6.07 6.07 0 0 0 2.45 4.55a11.5 11.5 0 0 0 2.91 1.72v1.16a11.5 11.5 0 0 0-2.91 1.72a6.07 6.07 0 0 0-2.45 4.55v5.12H25v-5.12a6.07 6.07 0 0 0-2.45-4.55a11.5 11.5 0 0 0-2.91-1.72v-1.16a11.5 11.5 0 0 0 2.91-1.72" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHourglassSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
