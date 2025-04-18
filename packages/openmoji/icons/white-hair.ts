import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhiteHairIcon],svg[openmoji-white-hair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10" stroke-width="2"><svg:path fill="#d0cfce" stroke="#d0cfce" d="M16 53.86h37.82C54 51 56 48.11 56 45.19c0-13.57-11.31-27.14-31.66-27.14c-3 0-5.75 2.14-8.34 2.68z"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" d="M16 53.89h30.34c-1.63-9-3.77-16.69-3.77-16.69c-13.11 0-19.1 4.57-26.57 4.8z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M55.75 54c.17-2.85.25-5.81.25-8.76C56 31.67 44.69 18.1 24.34 18.1a40.596 40.596 0 0 0-8.34.86"></svg:path><svg:path d="M48.48 54a78.845 78.845 0 0 0-6-17.81c-13 0-19 3.5-26.43 3.78"></svg:path></svg:g>`,
})
export class OpenmojiWhiteHairIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
