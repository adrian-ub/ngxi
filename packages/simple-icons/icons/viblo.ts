import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVibloIcon],svg[simple-icons-viblo-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.569 19.68h2.904L21.621.018L18.705 0l-4.428 10.668H9.705L5.295 0H2.379zm-7.02 1.854h16.908V24H3.549z"></svg:path>`,
})
export class SimpleIconsVibloIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
