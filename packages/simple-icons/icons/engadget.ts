import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEngadgetIcon],svg[simple-icons-engadget-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 20.067a3.9 3.9 0 0 0 4 3.866h16v-4H4v-4h15.733A4.23 4.23 0 0 0 24 12.067V4.333A4.483 4.483 0 0 0 19.733.067H4a4.346 4.346 0 0 0-4 4.266Zm20-8.134H4v-8h16Z"></svg:path>`,
})
export class SimpleIconsEngadgetIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
