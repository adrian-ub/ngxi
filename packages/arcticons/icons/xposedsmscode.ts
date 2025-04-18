import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXposedsmscodeIcon],svg[arcticons-xposedsmscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.295 5.918h29.41A3.787 3.787 0 0 1 42.5 9.713v21.82a3.787 3.787 0 0 1-3.795 3.795H13.173c-2.102 0-7.673 8.523-7.673 6.42V9.714a3.787 3.787 0 0 1 3.795-3.795"></svg:path><svg:rect width="4.776" height="4.776" x="21.612" y="18.494" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.973" ry="1.973"></svg:rect><svg:rect width="4.776" height="4.776" x="14.939" y="18.494" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.973" ry="1.973"></svg:rect><svg:rect width="4.776" height="4.776" x="28.285" y="18.494" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.973" ry="1.973"></svg:rect>`,
})
export class ArcticonsXposedsmscodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
