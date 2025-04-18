import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityClockSolidBadgedIcon],svg[clarity-clock-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.12 12.81a7.48 7.48 0 0 1-10.44-5.18A11.2 11.2 0 0 0 18 6.6a11.39 11.39 0 0 0-2.69 22.47L15 30.63A13 13 0 0 1 18 5a12.8 12.8 0 0 1 4.51.82a7.5 7.5 0 0 1 .68-2.94a16.06 16.06 0 1 0 9.93 9.93M24.2 23.18a1 1 0 0 1-1.39.28l-5.9-4v-8.71a1 1 0 0 1 2 0v7.65l5 3.39a1 1 0 0 1 .29 1.39" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityClockSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
