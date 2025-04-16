import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEacIcon],svg[simple-icons-eac-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.667 24h2.667v-2.667H2.667v-8h2.667v-2.666H2.667v-8h2.667V0H0v24zm21.334-2.667h-2.668V2.667h2.668V0h-5.333v24h5.333zM13.334 0H8v24h2.667V13.335h2.667V24H16V0Zm0 10.667h-2.667v-8h2.667z"></svg:path>`,
})
export class SimpleIconsEacIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
