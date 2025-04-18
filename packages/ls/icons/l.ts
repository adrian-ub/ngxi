import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsLIcon],svg[ls-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 754V0h72v754z"></svg:path>`,
})
export class LsLIcon {
  readonly viewBox = input("0 0 72 754")
  readonly width = input("0.1em")
  readonly height = input("1em")
}
