import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySunLineIcon],svg[clarity-sun-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6.31a1 1 0 0 0 1-1v-3.4a1 1 0 0 0-2 0v3.4a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 29.69a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0v-3.4a1 1 0 0 0-1-1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M8.32 9.74A1 1 0 0 0 9 10a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42L7.33 5.92a1 1 0 0 0-1.41 1.41Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M27.68 26.26a1 1 0 1 0-1.42 1.42l2.41 2.4a1 1 0 0 0 .71.3a1 1 0 0 0 .7-.3a1 1 0 0 0 0-1.41Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M6.31 18a1 1 0 0 0-1-1h-3.4a1 1 0 0 0 0 2h3.4a1 1 0 0 0 1-1" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M34.09 17h-3.4a1 1 0 1 0 0 2h3.4a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="m8.32 26.26l-2.4 2.41a1 1 0 0 0 .7 1.71a1 1 0 0 0 .71-.3l2.41-2.4a1 1 0 1 0-1.42-1.42" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M27 10a1 1 0 0 0 .71-.29l2.4-2.41a1 1 0 0 0 0-1.41a1 1 0 0 0-1.41 0l-2.41 2.4a1 1 0 0 0 0 1.42A1 1 0 0 0 27 10" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="currentColor" d="M18.13 7.75a10.13 10.13 0 1 0 10 10.13a10.08 10.08 0 0 0-10-10.13m0 18.25a8.13 8.13 0 1 1 8-8.12a8.08 8.08 0 0 1-8 8.12" class="clr-i-outline clr-i-outline-path-9"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySunLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
