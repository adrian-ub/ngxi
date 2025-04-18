import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCharacterRecognitionLineIcon],svg[ri-character-recognition-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.598l4.399-11zm-1 2.885L10.75 12h2.492zM8.998 3v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z"></svg:path>`,
})
export class RiCharacterRecognitionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
