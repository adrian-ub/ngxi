import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDollarIcon],svg[picon-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V0h1v8m1 0V0h1v8M1 4V1h6v1H0v1h6v4H0V6h7V4"></svg:path>`,
})
export class PiconDollarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
