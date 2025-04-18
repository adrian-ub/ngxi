import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowRightCircleIcon],svg[lineicons-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.956 11.749H8.888a.75.75 0 0 0 0 1.5h5.07l-1.372 1.373a.75.75 0 1 0 1.061 1.06l2.638-2.64a.75.75 0 0 0-.026-1.11l-2.612-2.614a.75.75 0 0 0-1.06 1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.328 12.5c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.521-4.478 9.998-10 9.998s-10-4.477-10-9.999m10-8.5a8.5 8.5 0 1 0 0 16.999a8.5 8.5 0 0 0 0-16.999" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsArrowRightCircleIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
