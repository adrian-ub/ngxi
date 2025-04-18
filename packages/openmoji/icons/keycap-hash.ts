import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycapHashIcon],svg[openmoji-keycap-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.875 12.208h48v47.834h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.125 11.958h48v48h-48z"></svg:path><svg:path d="M33.453 27.616L30.94 44.634"></svg:path><svg:path d="M40.81 27.616l-2.513 17.018"></svg:path><svg:path d="M28.066 32.357l16.717-.017"></svg:path><svg:path d="M26.967 39.847l16.717-.017"></svg:path></svg:g>`,
})
export class OpenmojiKeycapHashIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
