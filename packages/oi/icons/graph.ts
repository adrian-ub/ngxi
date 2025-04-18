import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiGraphIcon],svg[oi-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.03 0L4 3L3 2L0 5.03l1 1L3 4l1 1l4-4zM0 7v1h8V7z"></svg:path>`,
})
export class OiGraphIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
