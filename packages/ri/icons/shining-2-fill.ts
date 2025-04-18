import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShining2FillIcon],svg[ri-shining-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5L16 8l7.5 4l-7.5 4l-4 7.5L8 16L.5 12L8 8z"></svg:path>`,
})
export class RiShining2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
