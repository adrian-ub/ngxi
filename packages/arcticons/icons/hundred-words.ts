import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHundredWordsIcon],svg[arcticons-hundred-words-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.126 23.692V5.196h12.82v16.646m0 4.624v16.338h-12.82V28.546m17.554-7.783V5.196H42.5v13.333m0 4.777v19.498H29.68V25.387M5.5 5.22v19.793m0 4.932v12.858"></svg:path>`,
})
export class ArcticonsHundredWordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
