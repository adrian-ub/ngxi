import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAegisIcon],svg[arcticons-aegis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.59 40a2.4 2.4 0 0 1-3.28-.88l-.48-.82A2.4 2.4 0 0 1 20 35.91l.48.82a2.42 2.42 0 0 1-.89 3.27m10.85 0a2.4 2.4 0 0 1-3.28-.88l-5.64-9.76A2.4 2.4 0 1 1 25.68 27l5.64 9.77a2.39 2.39 0 0 1-.88 3.23m10.86 0a2.42 2.42 0 0 1-3.3-.86L25.67 17.75a1.92 1.92 0 0 0-3.33 0L10 39.14a2.42 2.42 0 0 1-2.09 1.2A2.37 2.37 0 0 1 6.7 40a2.4 2.4 0 0 1-.88-3.28l16.1-27.86a2.4 2.4 0 0 1 4.16 0l16.1 27.88A2.4 2.4 0 0 1 41.3 40"></svg:path>`,
})
export class ArcticonsAegisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
