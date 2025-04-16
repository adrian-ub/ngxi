import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEIcon],svg[simple-icons-e-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.004 12.004A12.01 12.01 0 0 0 12 24a2.27 2.27 0 0 0 2.266-2.266A2.27 2.27 0 0 0 12 19.467c-4.116 0-7.463-3.347-7.463-7.463S7.884 4.541 12 4.541c3.323 0 6.15 2.186 7.111 5.197H12a2.27 2.27 0 0 0-2.266 2.266A2.27 2.27 0 0 0 12 14.27h9.73a2.27 2.27 0 0 0 2.266-2.266A12.02 12.02 0 0 0 12 0C5.385.008.004 5.39.004 12.004"></svg:path>`,
})
export class SimpleIconsEIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
