import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phToggleRightFillIcon],svg[ph-toggle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhToggleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
