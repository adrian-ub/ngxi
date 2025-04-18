import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibEseaIcon],svg[cib-esea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.74 4l-6.808 8.995L0 13.178l7.776 5.959l-6.385 9.171l11.317-5.447l7.615 5.765v-9.489L32 13.37L8.995 18.735c.792-.797 1.5-1.672 2.12-2.609c.407-.74.688-1.541.817-2.38l7.459-.204z"></svg:path>`,
})
export class CibEseaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
