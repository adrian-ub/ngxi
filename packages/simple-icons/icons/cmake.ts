import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCmakeIcon],svg[simple-icons-cmake-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.769.066L.067 23.206l12.76-10.843zm11.438 23.868L7.471 17.587L0 23.934zm.793-.198L12.298.463l1.719 19.24zM12.893 12.959l-5.025 4.298l5.62 2.248z"></svg:path>`,
})
export class SimpleIconsCmakeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
