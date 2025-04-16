import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAlfredIcon],svg[simple-icons-alfred-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15.902c0-1.142 1.133-2.184 3-2.977v-1.827c0-4.142 4.029-7.5 9-7.5s9 3.358 9 7.5v1.827c1.867.793 3 1.835 3 2.977c0 2.485-5.373 4.5-12 4.5s-12-2.015-12-4.5"></svg:path>`,
})
export class SimpleIconsAlfredIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
