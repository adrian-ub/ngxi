import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCharacterSentenceCaseIcon],svg[carbon-character-sentence-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 23h-5a2.003 2.003 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5zM18 13h-4V9h-2v14h6a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zM8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5z"></svg:path>`,
})
export class CarbonCharacterSentenceCaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
