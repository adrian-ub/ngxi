import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiUpsideDownFaceIcon],svg[openmoji-upside-down-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26.185 27.07c2.9-1.636 6.248-2.57 9.815-2.57s6.915.934 9.815 2.57"></svg:path><svg:path d="M42 41a3.001 3.001 0 0 1 6 0c0 1.655-1.345 3-3 3s-3-1.345-3-3m-18 0a3.001 3.001 0 0 1 6 0c0 1.655-1.345 3-3 3s-3-1.345-3-3"></svg:path>`,
})
export class OpenmojiUpsideDownFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
