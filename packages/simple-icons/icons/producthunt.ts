import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsProducthuntIcon],svg[simple-icons-producthunt-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 1 0 0-3.6M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12s12-5.372 12-12S18.628 0 12 0m1.604 14.4h-3.405V18H7.801V6h5.804a4.2 4.2 0 1 1-.001 8.4"></svg:path>`,
})
export class SimpleIconsProducthuntIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
