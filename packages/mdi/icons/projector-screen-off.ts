import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenOffIcon],svg[mdi-projector-screen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.89v1.7l4.21 4.2l-1.42 1.42l-2.79-2.8V22h-2v-2.59l-2.79 2.8l-1.42-1.42l4.21-4.2V14H5V6.89L1.11 3l1.28-1.27l19.72 19.73l-1.27 1.27zm6-.89V5h1c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H5.2l12 12z"></svg:path>`,
})
export class MdiProjectorScreenOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
