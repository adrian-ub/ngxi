import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTryitonlineIcon],svg[simple-icons-tryitonline-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.75 6a.75.75 0 1 0 0 1.5H4.5v9.75a.75.75 0 1 0 1.5 0V7.5h17.25a.75.75 0 1 0 0-1.5zm10.5 3a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75m8.25 0a4.51 4.51 0 0 0-4.5 4.5c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5S21.98 9 19.5 9m0 1.5c1.67 0 3 1.33 3 3s-1.33 3-3 3s-3-1.33-3-3s1.33-3 3-3"></svg:path>`,
})
export class SimpleIconsTryitonlineIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
