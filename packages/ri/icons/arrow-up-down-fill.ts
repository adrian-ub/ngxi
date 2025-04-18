import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowUpDownFillIcon],svg[ri-arrow-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8H8.001L8 20H6V8H2l5-5zm10 8l-5 5l-5-5h4V4h2v12z"></svg:path>`,
})
export class RiArrowUpDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
