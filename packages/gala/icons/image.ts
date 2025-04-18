import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaImageIcon],svg[gala-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.233" transform="scale(3.77953)"><svg:rect width="59.267" height="59.267" x="4.233" y="4.233" ry="8.467"></svg:rect><svg:path d="m 25.4,33.866667 c -12.7,0 -16.9333334,8.466665 -21.1666669,8.466665"></svg:path><svg:path d="m 25.4,33.866667 c 12.7,0 17.582797,8.466665 25.399999,8.466665"></svg:path><svg:path d="M 63.5,38.099999 C 48.683332,38.099998 46.566666,50.8 38.1,50.8"></svg:path><svg:circle cx="46.567" cy="21.167" r="8.467"></svg:circle></svg:g>`,
})
export class GalaImageIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
