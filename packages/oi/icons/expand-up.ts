import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiExpandUpIcon],svg[oi-expand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v2h8V0zm4 4L2 6h4zM0 7v1h8V7z"></svg:path>`,
})
export class OiExpandUpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
