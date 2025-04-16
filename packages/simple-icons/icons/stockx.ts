import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsStockxIcon],svg[simple-icons-stockx-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.74 16.5L22.5 24v-6l-7-6l7-6V0L10.26 10.5v-3L1.5 0v6l7 6l-7 6v6l12.24-10.5Z"></svg:path>`,
})
export class SimpleIconsStockxIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
