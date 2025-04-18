import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibSpectrumIcon],svg[cib-spectrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 13.599A2.4 2.4 0 0 0 2.401 16h2.401c6.181 0 11.197 5.016 11.197 11.197v2.401a2.4 2.4 0 0 0 2.401 2.401h11.197a2.4 2.4 0 0 0 2.401-2.401v-2.401C31.998 12.177 19.821 0 4.801 0H2.4A2.4 2.4 0 0 0-.001 2.401z"></svg:path>`,
})
export class CibSpectrumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
