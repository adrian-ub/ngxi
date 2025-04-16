import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTensorflowIcon],svg[simple-icons-tensorflow-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564l.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788l-.018-4.618l-3.074-1.756V7.603z"></svg:path>`,
})
export class SimpleIconsTensorflowIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
