import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiShutter10Icon],svg[cbi-shutter-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 6.765h19v.475h-19Zm.23-2.729h18.54v2.397H2.73ZM2.5 2.032v1.692h19V2.032Zm3.722 1.347H3.07V2.3h3.152Zm-2.953-.875h2.753v.675H3.269z"></svg:path>`,
})
export class CbiShutter10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
