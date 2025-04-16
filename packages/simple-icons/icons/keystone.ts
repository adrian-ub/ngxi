import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKeystoneIcon],svg[simple-icons-keystone-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 0A4.5 4.5 0 0 0 0 4.5v15A4.5 4.5 0 0 0 4.5 24h15a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 19.5 0zm5.47 14.789v3.586H6.744V5.692H9.97v5.45h.167l4.218-5.45h3.463l-4.385 5.599l4.64 7.084h-3.788l-3.2-5.001z"></svg:path>`,
})
export class SimpleIconsKeystoneIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
