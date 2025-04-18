import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVocabularyOffIcon],svg[tabler-vocabulary-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h3a2 2 0 0 1 2 2a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v13m-2 2h-5a2 2 0 0 0-2 2a2 2 0 0 0-2-2H4a1 1 0 0 1-1-1V4c0-.279.114-.53.298-.712M12 5v3m0 4v9M7 11h1m8-4h1m-1 4h1M3 3l18 18"></svg:path>`,
})
export class TablerVocabularyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
