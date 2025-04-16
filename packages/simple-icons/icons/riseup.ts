import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRiseupIcon],svg[simple-icons-riseup-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 24l-1.485-9.007l-8.961-1.738L8.16 9.06L7.045 0l6.495 6.414l8.271-3.861l-4.093 8.16l6.228 6.673l-9.024-1.372z"></svg:path>`,
})
export class SimpleIconsRiseupIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
