import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKibanaIcon],svg[simple-icons-kibana-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.76 18.76 0 0 0-7.51-11.53"></svg:path>`,
})
export class SimpleIconsKibanaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
