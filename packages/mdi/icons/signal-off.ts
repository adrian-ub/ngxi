import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignalOffIcon],svg[mdi-signal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v13.18l3 3V3zM4.28 5L3 6.27L10.73 14H8v7h3v-6.73l2 2V21h3v-1.73L19.73 23L21 21.72zM13 9v2.18l3 3V9zM3 18v3h3v-3z"></svg:path>`,
})
export class MdiSignalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
