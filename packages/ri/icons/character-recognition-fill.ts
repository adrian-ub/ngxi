import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCharacterRecognitionFillIcon],svg[ri-character-recognition-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3v18h-18V3zm-8.001 3h-2L6.598 17h2.154l1.199-3h4.09l1.201 3h2.155zm-1 2.885L13.242 12H10.75z"></svg:path>`,
})
export class RiCharacterRecognitionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
