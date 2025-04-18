import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeBoldIcon],svg[ph-circles-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48m-48 24a24 24 0 1 1 24-24a24 24 0 0 1-24 24m60 24a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhCirclesThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
