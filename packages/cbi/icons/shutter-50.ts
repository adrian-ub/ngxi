import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiShutter50Icon],svg[cbi-shutter-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12.749h19v.475h-19Zm.23-8.661h18.54v8.328H2.73ZM2.5 2.084v1.693h19V2.084Zm3.722 1.348H3.067V2.355h3.155Zm-2.954-.876h2.753v.675H3.268z"></svg:path>`,
})
export class CbiShutter50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
