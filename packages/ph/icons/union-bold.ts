import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUnionBoldIcon],svg[ph-union-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 64v80a84 84 0 0 1-168 0V64a12 12 0 0 1 24 0v80a60 60 0 0 0 120 0V64a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhUnionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
