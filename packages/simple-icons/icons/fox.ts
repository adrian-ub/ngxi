import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFoxIcon],svg[simple-icons-fox-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.069 9.7h3.42L6.3 6.932H0v10.136h3.069V13.8h2.789v-2.778H3.069ZM24 6.932h-3.291L19.48 9.1l-1.231-2.168h-3.292l2.871 5.076l-2.871 5.06h3.308l1.215-2.142l1.213 2.142H24l-2.871-5.06Zm-12.592 0A5.067 5.067 0 1 0 16.475 12a5.067 5.067 0 0 0-5.067-5.065Zm.888 7.146a.867.867 0 0 1-.873.847a.847.847 0 0 1-.837-.858V9.919a.88.88 0 0 1 .837-.9a.913.913 0 0 1 .873.9Z"></svg:path>`,
})
export class SimpleIconsFoxIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
