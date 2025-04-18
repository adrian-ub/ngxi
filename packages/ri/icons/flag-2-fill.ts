import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlag2FillIcon],svg[ri-flag-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h19.138a.5.5 0 0 1 .434.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4v5H2z"></svg:path>`,
})
export class RiFlag2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
