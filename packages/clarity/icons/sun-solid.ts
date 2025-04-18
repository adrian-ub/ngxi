import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySunSolidIcon],svg[clarity-sun-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6.42a1 1 0 0 0 1-1V1.91a1 1 0 0 0-2 0v3.51a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M18 29.58a1 1 0 0 0-1 1v3.51a1 1 0 0 0 2 0v-3.51a1 1 0 0 0-1-1" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M8.4 9.81A1 1 0 0 0 9.81 8.4L7.33 5.92a1 1 0 0 0-1.41 1.41Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M27.6 26.19a1 1 0 0 0-1.41 1.41l2.48 2.48a1 1 0 0 0 1.41-1.41Z" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="currentColor" d="M6.42 18a1 1 0 0 0-1-1H1.91a1 1 0 0 0 0 2h3.51a1 1 0 0 0 1-1" class="clr-i-solid clr-i-solid-path-5"></svg:path><svg:path fill="currentColor" d="M34.09 17h-3.51a1 1 0 0 0 0 2h3.51a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-6"></svg:path><svg:path fill="currentColor" d="m8.4 26.19l-2.48 2.48a1 1 0 0 0 1.41 1.41l2.48-2.48a1 1 0 0 0-1.41-1.41" class="clr-i-solid clr-i-solid-path-7"></svg:path><svg:path fill="currentColor" d="m27.6 9.81l2.48-2.48a1 1 0 0 0-1.41-1.41L26.19 8.4a1 1 0 0 0 1.41 1.41" class="clr-i-solid clr-i-solid-path-8"></svg:path><svg:circle cx="18" cy="18" r="10" fill="currentColor" class="clr-i-solid clr-i-solid-path-9"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySunSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
