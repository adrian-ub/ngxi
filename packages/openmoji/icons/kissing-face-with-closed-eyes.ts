import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKissingFaceWithClosedEyesIcon],svg[openmoji-kissing-face-with-closed-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M36.415 41.092s10.525 3.196 0 5.564c0 0 10.458 2.988 0 4.913M21.109 27.202a6.3 6.3 0 0 1 3.39-3a6.3 6.3 0 0 1 4.53-.421m21.69 3.421a7.19 7.19 0 0 0-7.91-3.431M23.484 34.245s3.932-2.17 8 0m9.25 0s3.932-2.17 8 0"></svg:path><svg:circle cx="36" cy="36" r="23"></svg:circle></svg:g>`,
})
export class OpenmojiKissingFaceWithClosedEyesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
