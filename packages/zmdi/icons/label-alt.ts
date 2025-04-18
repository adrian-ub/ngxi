import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLabelAltIcon],svg[zmdi-label-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m312 61l93 131l-93 131q-13 18-35 18H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43h234q22 0 35 18"></svg:path>`,
})
export class ZmdiLabelAltIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
