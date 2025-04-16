import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsJovianIcon],svg[simple-icons-jovian-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 1.65C20.25.74 19.51 0 18.6 0H5.4c-.91 0-1.65.74-1.65 1.65v20.7c0 .91.74 1.65 1.65 1.65h13.2c.91 0 1.65-.74 1.65-1.65zm-5.275 4.341a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m.04 9.018a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-6.015 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SimpleIconsJovianIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
