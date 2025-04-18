import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psEnlargeIcon],svg[ps-enlarge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177 305L43 439v-55q0-21-22-21q-21 0-21 21v107q0 9 6 15t15 6h107q21 0 21-21q0-22-21-22H73l134-134q13-15 0-30q-15-13-30 0M491 0H384q-21 0-21 21q0 22 21 22h55L305 177q-13 15 0 30q6 6 15 6t15-6L469 73v55q0 21 22 21q21 0 21-21V21q0-9-6-15t-15-6"></svg:path>`,
})
export class PsEnlargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
