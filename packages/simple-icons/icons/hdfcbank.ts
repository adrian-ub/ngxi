import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHdfcbankIcon],svg[simple-icons-hdfcbank-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.572 0v10.842h3.712V4.485h6.381V0Zm12.413 0v4.485h6.383v6.357h4.06V0Zm-4.64 8.53v6.938h6.963V8.53ZM.572 13.153V24h10.093v-4.486h-6.38v-6.361zm18.796 0v6.361h-6.383V24h10.443V13.153Z"></svg:path>`,
})
export class SimpleIconsHdfcbankIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
