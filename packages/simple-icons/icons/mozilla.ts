import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMozillaIcon],svg[simple-icons-mozilla-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.819 24H1.75V0h3.07zM7.33 12.242h12.15v-.69L11.562 8.67V6.25l7.918-2.872v-.7H10.1V0h12.149v4.89l-6.445 2.224v.69l6.445 2.224v4.89H7.33zm0-9.565h2.77v2.77H7.33z"></svg:path>`,
})
export class SimpleIconsMozillaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
