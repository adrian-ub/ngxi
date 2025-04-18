import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEqualsThinIcon],svg[ph-equals-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 160a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 100h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhEqualsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
