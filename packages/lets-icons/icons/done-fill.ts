import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneFillIcon],svg[lets-icons-done-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m19.548 7.267l.633-.774l-.774-.634l-1.548-1.266l-.774-.633l-.633.774l-7.786 9.516L6.2 12.4l-.8-.6l-.6.8l-1.2 1.6l-.6.8l.8.6l4.767 3.575l.767.575l.607-.741z"></svg:path>`,
})
export class LetsIconsDoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
