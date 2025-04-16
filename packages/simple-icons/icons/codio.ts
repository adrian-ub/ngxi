import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCodioIcon],svg[simple-icons-codio-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.997 24L1.605 17.997v-12L12 0l10.396 5.997L16.5 9.402L12 6.8L7.496 9.4v5.2l4.502 2.6l4.5-2.6l5.895 3.397L12.003 24z"></svg:path>`,
})
export class SimpleIconsCodioIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
