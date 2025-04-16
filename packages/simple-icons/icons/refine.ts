import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRefineIcon],svg[simple-icons-refine-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.789.422a4 4 0 0 0-3.578 0l-8 4A4 4 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4 4 0 0 0 3.578 0l8-4A4 4 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578zM8 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0zm6 0a2 2 0 1 1-3.999.001A2 2 0 0 1 14 8"></svg:path>`,
})
export class SimpleIconsRefineIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
