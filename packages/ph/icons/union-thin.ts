import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUnionThinIcon],svg[ph-union-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 64v80a76 76 0 0 1-152 0V64a4 4 0 0 1 8 0v80a68 68 0 0 0 136 0V64a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhUnionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
