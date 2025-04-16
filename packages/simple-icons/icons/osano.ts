import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsOsanoIcon],svg[simple-icons-osano-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.091A5.909 5.909 0 1 0 17.909 12A5.91 5.91 0 0 0 12 6.091M12 0A12 12 0 1 1 0 12A12 12 0 0 1 12 0"></svg:path>`,
})
export class SimpleIconsOsanoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
