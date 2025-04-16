import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZodIcon],svg[simple-icons-zod-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.088 2.477L24 7.606L12.521 20.485l-.925 1.038L0 7.559l5.108-5.082zm-17.434 5.2l6.934-4.003H5.601L1.619 7.636zm12.117-4.003L3.333 9.7l2.149 2.588l10.809-6.241l-.2-.346l2.851-1.646l-.365-.381zm7.52 2.834L8.257 14.034h5.101v-.4h3.667l5.346-5.998zm-7.129 10.338H9.268l2.36 2.843z"></svg:path>`,
})
export class SimpleIconsZodIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
