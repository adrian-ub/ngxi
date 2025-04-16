import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFuturelearnIcon],svg[simple-icons-futurelearn-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.081.61v7.566h-7.223v6.661H7.566v6.634H0v1.92h9.471v-6.649h7.306v-6.66H24V.61Z"></svg:path>`,
})
export class SimpleIconsFuturelearnIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
