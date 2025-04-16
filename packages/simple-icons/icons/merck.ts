import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMerckIcon],svg[simple-icons-merck-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a6 6 0 0 1 12 0zm0 12a6 6 0 0 1 6-6a6 6 0 0 1-6-6a6 6 0 0 0 0 12a6 6 0 1 0 12 0zm6-6a6 6 0 0 1 6 6a6 6 0 1 0 0-12a6 6 0 0 1-6 6"></svg:path>`,
})
export class SimpleIconsMerckIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
