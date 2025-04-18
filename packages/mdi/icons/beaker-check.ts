import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBeakerCheckIcon],svg[mdi-beaker-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.75 21.16l-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41zM3 3h18v2c-1.1 0-2 .9-2 2v5a6.005 6.005 0 0 0-5.2 9H7c-1.1 0-2-.9-2-2V7c0-1.1-.9-2-2-2zm4 6v1h3V9zm0 2v1h3v-1zm3 5v-1H7v1zm2-2v-1H7v1zm0-6V7H7v1z"></svg:path>`,
})
export class MdiBeakerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
