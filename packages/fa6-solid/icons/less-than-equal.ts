import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidLessThanEqualIcon],svg[fa6-solid-less-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M395.9 93.7c16.4-6.6 24.4-25.2 17.8-41.6s-25.2-24.4-41.6-17.8l-320 128C40 167.1 32 178.9 32 192s8 24.9 20.1 29.7l320 128c16.4 6.6 35-1.4 41.6-17.8s-1.4-35-17.8-41.6L150.2 192zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidLessThanEqualIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
