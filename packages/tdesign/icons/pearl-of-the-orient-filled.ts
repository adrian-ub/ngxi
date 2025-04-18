import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPearlOfTheOrientFilledIcon],svg[tdesign-pearl-of-the-orient-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998.999L13 3.17a3.001 3.001 0 0 1 0 5.66v4.296a4.002 4.002 0 0 1 1.86 6.67L16.754 23H14.43l-1.28-2.168a4 4 0 0 1-2.298 0L9.574 23H7.25l1.89-3.204A3.9 3.9 0 0 1 8 17a4 4 0 0 1 3-3.874V8.829a3.001 3.001 0 0 1 0-5.658L10.998 1z"></svg:path>`,
})
export class TdesignPearlOfTheOrientFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
