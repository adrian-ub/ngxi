import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNewlineLtrIcon],svg[ooui-newline-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v6H7V6l-6 5l6 5v-4h12V4z"></svg:path>`,
})
export class OouiNewlineLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
