import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExtinguishIcon],svg[arcticons-extinguish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.079 36.449L24.077 25.46m-8.186-8.176l-5.48-5.472m23.705-3.62c.624 3.034.497 6.73-1.865 9.102l-8.175 8.165l-8.175-8.165c-2.362-2.373-2.49-6.068-1.864-9.1c-10.45 8.354-7.903 19.162-1.104 26.883c1.634-1.623 3.799-2.521 6.05-2.521c4.87 0 8.817 4.122 8.817 9.207h0c0 .573-.05 1.144-.061 1.736c10.813-7.734 20.104-24.332 6.377-35.307m-10.174 11.62l-5.585-5.46c-.828-.81-1.062-2.2-1.062-3.214A6.643 6.643 0 0 1 23.941 4.5a6.643 6.643 0 0 1 6.646 6.638h0c0 1.014-.234 2.403-1.062 3.213z"></svg:path>`,
})
export class ArcticonsExtinguishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
