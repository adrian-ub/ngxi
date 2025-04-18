import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciWarningOutlineIcon],svg[ci-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.266 20.998H2.733a1 1 0 0 1-.866-1.5l9.266-16a1 1 0 0 1 1.73 0l9.267 16a1 1 0 0 1-.865 1.5ZM12 5.998l-7.531 13h15.064L12 5.998Zm.995 9.001h-2V9.998h2v5.001Z"></svg:path><svg:path fill="currentColor" d="M11 16h2v2h-2v-2Z"></svg:path>`,
})
export class CiWarningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
