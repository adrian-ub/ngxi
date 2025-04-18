import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsHIcon],svg[ls-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 0v292c42-40 109-64 171-64s110 24 152 64c44 42 71 102 71 168v294h-71V456c-3-87-64-157-152-157c-87 0-169 70-171 157v298H0V0z"></svg:path>`,
})
export class LsHIcon {
  readonly viewBox = input("0 0 466 754")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
