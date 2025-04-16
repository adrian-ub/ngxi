import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTaichigraphicsIcon],svg[simple-icons-taichigraphics-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.343 20.672a1.94 1.94 0 0 0 1.94-1.94a1.94 1.94 0 1 0-3.88 0a1.94 1.94 0 0 0 1.94 1.94M9.058 12.796a6.858 6.858 0 1 0-2.324-9.67q-.094.148-.185.3c-.06.103-.11.205-.167.31a6.86 6.86 0 0 0 2.676 9.06m0-.003h-4.23l-2.113 3.663l2.114 3.667h4.229l2.116-3.667zm0 7.33L6.82 23.999h4.48Z"></svg:path>`,
})
export class SimpleIconsTaichigraphicsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
