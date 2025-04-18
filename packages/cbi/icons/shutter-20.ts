import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiShutter20Icon],svg[cbi-shutter-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8.467h19v.475h-19Zm.23-4.474h18.54v4.14H2.73ZM2.5 1.99v1.692h19V1.99Zm3.722 1.347H3.07V2.26h3.152Zm-2.954-.876h2.753v.675H3.268z"></svg:path>`,
})
export class CbiShutter20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
