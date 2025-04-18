import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riOpenArmLineIcon],svg[ri-open-arm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v5h-2v-5a11 11 0 0 1 6.448-10.016l.827 1.82A9 9 0 0 0 18 17M8 17v5H6v-5A9 9 0 0 0 .726 8.805l.827-1.821A11 11 0 0 1 8 17m4-5a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiOpenArmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
