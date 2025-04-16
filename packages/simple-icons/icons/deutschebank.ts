import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDeutschebankIcon],svg[simple-icons-deutschebank-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.375 3.375v17.25h17.25V3.375zM0 0h24v24H0zm5.25 18.225l9.15-12.45h4.35L9.6 18.225z"></svg:path>`,
})
export class SimpleIconsDeutschebankIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
