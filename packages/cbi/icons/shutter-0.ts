import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiShutter0Icon],svg[cbi-shutter-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 4.949h19v.475h-19Zm.23-.92h18.54v.588H2.73ZM2.5 2.025v1.692h19V2.025Zm3.722 1.347H3.067V2.3h3.155Zm-2.954-.876h2.753v.675H3.268z"></svg:path>`,
})
export class CbiShutter0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
