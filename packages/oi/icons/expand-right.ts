import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiExpandRightIcon],svg[oi-expand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h2V0zm7 0v8h1V0zM6 2L4 4l2 2z"></svg:path>`,
})
export class OiExpandRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
