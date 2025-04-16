import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsInfomaniakIcon],svg[simple-icons-infomaniak-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.4 0A2.395 2.395 0 0 0 0 2.4v19.2C0 22.93 1.07 24 2.4 24h19.2c1.33 0 2.4-1.07 2.4-2.4V2.4C24 1.07 22.93 0 21.6 0H10.112v11.712l3.648-4.128h6l-4.58 4.35l4.868 8.13h-5.52l-2.594-5.021l-1.822 1.757v3.264H5.12V0Z"></svg:path>`,
})
export class SimpleIconsInfomaniakIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
