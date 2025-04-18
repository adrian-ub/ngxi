import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBoldIcon],svg[oi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1v1h5.5A2.5 2.5 0 0 0 8 5.5c0-1-.59-1.85-1.44-2.25A2 2 0 0 0 5 0zm3 1h1c.55 0 1 .45 1 1s-.45 1-1 1H3zm0 3h1.5C5.33 4 6 4.67 6 5.5S5.33 7 4.5 7H3z"></svg:path>`,
})
export class OiBoldIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
