import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmirkingFaceIcon],svg[openmoji-smirking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23s23-10.318 23-23s-10.318-23-23-23"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M29.94 46.66c8.505.703 16.67.427 16.98-4.128M41.93 26.77c.467-.25 2.52-1.1 5.042-.574c2.118.392 2.421.828 3.73 1.725M22.29 28.7c.327-.427 1.792-2.245 4.424-2.685c2.135-.357 3.794.402 4.352.688"></svg:path><svg:path d="M32 33a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiSmirkingFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
