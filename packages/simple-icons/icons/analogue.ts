import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAnalogueIcon],svg[simple-icons-analogue-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.468 12.804a5.145 5.145 0 1 0-.644 10.27a5.145 5.145 0 0 0 .644-10.27m17.841 2.562L16.45 3.484a5.146 5.146 0 0 0-8.912 5.15l6.86 11.878a5.15 5.15 0 0 0 7.031 1.885a5.146 5.146 0 0 0 1.881-7.031z"></svg:path>`,
})
export class SimpleIconsAnalogueIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
