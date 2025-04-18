import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasIncognitoIcon],svg[pajamas-incognito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.248 2.042a.75.75 0 0 0-.933.403L2.513 6.5H.75a.75.75 0 1 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-1.763l-1.802-4.055a.75.75 0 0 0-.933-.403L8 3.005zM11.846 6.5l-1.25-2.814l-2.348.822a.75.75 0 0 1-.496 0l-2.347-.822L4.155 6.5zm-6.346 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1.5A2.5 2.5 0 0 0 8 11.5a2.5 2.5 0 0 0 5 0h.25a.75.75 0 0 0 0-1.5h-.75a2.5 2.5 0 0 0-2-1c-.818 0-1.544.393-2 1h-1a2.5 2.5 0 0 0-2-1c-.818 0-1.544.393-2 1h-.75a.75.75 0 0 0 0 1.5H3A2.5 2.5 0 0 0 5.5 14m5-1.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasIncognitoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
