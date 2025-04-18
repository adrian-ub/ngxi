import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacPiscesIcon],svg[mdi-zodiac-pisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h-2c.11-2.81.73-5.58 1.81-8.18L18 2.06A26 26 0 0 0 16 11H8c-.13-3.08-.81-6.1-2-8.94l-1.86.76C5.24 5.41 5.87 8.18 6 11H4v2h2a23.8 23.8 0 0 1-1.81 8.18l1.81.76C7.19 19.1 7.87 16.08 8 13h8c.13 3.08.81 6.1 2 8.94l1.86-.76c-1.1-2.59-1.73-5.36-1.86-8.18h2z"></svg:path>`,
})
export class MdiZodiacPiscesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
