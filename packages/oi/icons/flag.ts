import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiFlagIcon],svg[oi-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h1V0zm2 0v4h2v1h4L6 3.03L8 1H5V0z"></svg:path>`,
})
export class OiFlagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
