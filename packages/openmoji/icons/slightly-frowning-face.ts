import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSlightlyFrowningFaceIcon],svg[openmoji-slightly-frowning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23s23-10.318 23-23s-10.318-23-23-23"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path d="M30 31a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M28 46c1.58-2.557 4.904-4.135 8.421-4.004C39.65 42.116 42.562 43.66 44 46"></svg:path>`,
})
export class OpenmojiSlightlyFrowningFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
