import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShining2LineIcon],svg[ri-shining-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l7.5 4l-7.5 4l-4 7.5L8 16L.5 12L8 8l4-7.5zm3.25 4l-4.728-2.522L12 4.75L9.478 9.478L4.75 12l4.728 2.522L12 19.25l2.522-4.728z"></svg:path>`,
})
export class RiShining2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
