import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDividers1Icon],svg[tdesign-dividers-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v3.532c1.945.44 3.427 2.133 3.427 4.205c0 .929-.298 1.782-.803 2.48l2.487 4.878a19 19 0 0 0 1.776-.703l.91-.415l.83 1.82l-.91.415q-.833.38-1.688.682L21.632 23h-2.249l-2.303-4.52a21.1 21.1 0 0 1-10.16 0L4.615 23H2.367l2.604-5.106q-.856-.303-1.688-.682l-.91-.415l.83-1.82l.91.415q.873.398 1.775.703l2.487-4.878a4.2 4.2 0 0 1-.802-2.48c0-2.072 1.481-3.765 3.427-4.205V1zM7.854 16.645c2.728.607 5.564.607 8.291 0l-2.083-4.09a4.5 4.5 0 0 1-2.062.498c-.74 0-1.444-.18-2.062-.497zM12 6.421c-1.372 0-2.427 1.068-2.427 2.316s1.055 2.316 2.427 2.316c1.371 0 2.427-1.068 2.427-2.316S13.37 6.42 12 6.42"></svg:path>`,
})
export class TdesignDividers1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
