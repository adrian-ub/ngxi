import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHushedFaceIcon],svg[openmoji-hushed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:ellipse cx="36" cy="48.395" fill="#FFF" rx="5.245" ry="6.538"></svg:ellipse><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M20.695 27.2a6.3 6.3 0 0 1 3.39-3a6.3 6.3 0 0 1 4.53-.42m22.69 3.42a7.19 7.19 0 0 0-7.909-3.43"></svg:path><svg:ellipse cx="36" cy="48.395" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" rx="5.245" ry="6.538"></svg:ellipse><svg:path d="M30 35a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiHushedFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
