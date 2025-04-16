import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsInertiaIcon],svg[simple-icons-inertia-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.901 5.331H0L6.669 12L0 18.669h6.901L13.571 12zm10.43 0H10.43L17.099 12l-6.67 6.669h6.902L24 12z"></svg:path>`,
})
export class SimpleIconsInertiaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
