import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextAnnotationToggleIcon],svg[carbon-text-annotation-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29.537 13.76l-3.297-3.297a1.586 1.586 0 0 0-2.24 0L10 24.467V30h5.533l14.004-14a1.586 1.586 0 0 0 0-2.24zM14.704 28H12v-2.704l9.44-9.441l2.705 2.704zM25.56 17.145l-2.704-2.704l2.267-2.267l2.704 2.704z" fill="currentColor"></svg:path><svg:path d="M11 17h2v-7h3V8H8v2h3v7z" fill="currentColor"></svg:path><svg:path d="M8 20H4V4h16v4h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4z" fill="currentColor"></svg:path>`,
})
export class CarbonTextAnnotationToggleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
