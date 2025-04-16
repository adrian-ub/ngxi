import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGoogledatastudioIcon],svg[simple-icons-googledatastudio-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.197 23.002a3.502 3.502 0 0 1 0-6h-6.909a3 3 0 0 0-.252-.011A3.05 3.05 0 0 0 9 20.002v.014a3.015 3.015 0 0 0 3.288 2.986zm1.803-6a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m-10.803-2.004a3.502 3.502 0 0 1 0-6H3.288a3 3 0 0 0-.252-.011A3.05 3.05 0 0 0 0 11.998v.014a3.015 3.015 0 0 0 3.288 2.986zm1.803-6a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m7.197-2.004a3.502 3.502 0 0 1 0-6h-6.909a3.06 3.06 0 0 0-3.288 3v.014a3.015 3.015 0 0 0 3.288 2.986zm1.803-6a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6"></svg:path>`,
})
export class SimpleIconsGoogledatastudioIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
