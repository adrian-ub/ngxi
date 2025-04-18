import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGrinningFaceIcon],svg[openmoji-grinning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:path fill="#FFF" d="M50.595 41.64a11.6 11.6 0 0 1-.87 4.49c-12.49 3.03-25.43.34-27.49-.13a11.4 11.4 0 0 1-.83-4.36h.11s14.8 3.59 28.89.07z"></svg:path><svg:path fill="#EA5A47" d="M49.725 46.13c-1.79 4.27-6.35 7.23-13.69 7.23c-7.41 0-12.03-3.03-13.8-7.36c2.06.47 15 3.16 27.49.13"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50.595 41.64a11.6 11.6 0 0 1-.87 4.49c-12.49 3.03-25.43.34-27.49-.13a11.4 11.4 0 0 1-.83-4.36h.11s14.8 3.59 28.89.07z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49.725 46.13c-1.79 4.27-6.35 7.23-13.69 7.23c-7.41 0-12.03-3.03-13.8-7.36c2.06.47 15 3.16 27.49.13"></svg:path><svg:path d="M30 31a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiGrinningFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
