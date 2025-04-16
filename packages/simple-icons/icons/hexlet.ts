import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHexletIcon],svg[simple-icons-hexlet-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.732 7.099v6.422H7.268V7.099L4.563 6.085V24h2.705v-7.775h9.464V24h2.705V6.085zm3.043-4.057L12 0L4.225 3.042L12 5.746z"></svg:path>`,
})
export class SimpleIconsHexletIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
