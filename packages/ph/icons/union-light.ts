import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUnionLightIcon],svg[ph-union-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 64v80a78 78 0 0 1-156 0V64a6 6 0 0 1 12 0v80a66 66 0 0 0 132 0V64a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhUnionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
