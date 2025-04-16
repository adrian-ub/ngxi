import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAccentureIcon],svg[simple-icons-accenture-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.66 16.95l13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z"></svg:path>`,
})
export class SimpleIconsAccentureIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
