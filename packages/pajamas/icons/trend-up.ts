import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTrendUpIcon],svg[pajamas-trend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.143 2.153a1 1 0 0 1 1.715 0l3.999 6.665a1 1 0 0 1-.858 1.515H2.001a1 1 0 0 1-.858-1.515z"></svg:path>`,
})
export class PajamasTrendUpIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
