import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAccessibility2SolidIcon],svg[clarity-accessibility-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.96" cy="5" r="3" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"></svg:circle><svg:path fill="currentColor" d="M30 10H6a1 1 0 0 0 0 2h8v8.36l-3.89 12.81a1 1 0 0 0 .66 1.25a1.6 1.6 0 0 0 .29 0a1 1 0 0 0 1-.71l3.29-10.84h5.38L24 33.75a1 1 0 0 0 1 .71a1.6 1.6 0 0 0 .29 0a1 1 0 0 0 .66-1.25L22 20.4V12h8a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAccessibility2SolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
