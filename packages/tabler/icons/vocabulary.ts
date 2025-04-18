import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVocabularyIcon],svg[tabler-vocabulary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2a2 2 0 0 0-2-2m2-14v16M7 7h1m-1 4h1m8-4h1m-1 4h1m-1 4h1"></svg:path>`,
})
export class TablerVocabularyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
