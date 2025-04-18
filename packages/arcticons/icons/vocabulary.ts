import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVocabularyIcon],svg[arcticons-vocabulary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.811 6.922H42.5m-2.844 0L28.278 41.078h-8.545L7.64 6.922m9.249 0L28.233 40.72M5.5 6.922h14.233"></svg:path>`,
})
export class ArcticonsVocabularyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
