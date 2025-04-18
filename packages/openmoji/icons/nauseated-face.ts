import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNauseatedFaceIcon],svg[openmoji-nauseated-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.003" cy="36" r="23" fill="#B1CC33"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27.267 22.367a6.3 6.3 0 0 1-2.25 3.928a6.3 6.3 0 0 1-4.156 1.852m23.872-5.78a6.3 6.3 0 0 0 2.25 3.928a6.3 6.3 0 0 0 4.156 1.852"></svg:path><svg:circle cx="36.003" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30.043 46.019c1.283-.82 3.87-1.038 5.957-1.038s4.674.218 5.957 1.038"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M28.669 42.838c1.832 1.67 1.832 4.235 0 5.986m14.661-5.986c-1.831 1.67-1.831 4.235 0 5.986"></svg:path><svg:path d="M30 33a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiNauseatedFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
