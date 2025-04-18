import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUnionIcon],svg[ph-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 64v80a80 80 0 0 1-160 0V64a8 8 0 0 1 16 0v80a64 64 0 0 0 128 0V64a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhUnionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
