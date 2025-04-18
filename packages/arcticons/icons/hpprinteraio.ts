import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHpprinteraioIcon],svg[arcticons-hpprinteraio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.2h39a4.66 4.66 0 0 0-4.68-4.68H9.18A4.69 4.69 0 0 0 4.5 16.2m0 0v12.48a4.65 4.65 0 0 0 4.68 4.68h4.68V24h20.28v9.36h4.68a4.65 4.65 0 0 0 4.68-4.68V16.2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.86 24v12.48h20.28V24Zm3.12 9.36h9.36m-9.36-3.12h14.04m-14.04-3.12h14.04"></svg:path>`,
})
export class ArcticonsHpprinteraioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
