import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMouse16Icon],svg[qlementine-icons-mouse-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1c2.76 0 5 2.24 5 5v4c0 2.76-2.24 5-5 5s-5-2.24-5-5V6c0-2.76 2.24-5 5-5m4 8v1c0 2.21-1.79 4-4 4s-4-1.79-4-4V9zM7 6a1 1 0 0 0 .5.866v1.13H4v-2c0-2.04 1.53-3.72 3.5-3.97v1.1a1 1 0 0 0-.5.866v2zm1.5-2.87a1 1 0 0 1 .5.866v2a1 1 0 0 1-.5.866v1.13H12v-2c0-2.04-1.53-3.72-3.5-3.97v1.1z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMouse16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
