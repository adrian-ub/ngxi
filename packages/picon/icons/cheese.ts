import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCheeseIcon],svg[picon-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h8v3H0m0-4l5-3q3 0 3 3M2 8l1-1l-1-1l-1 1m4 0l1-1l-1-1l-1 1"></svg:path>`,
})
export class PiconCheeseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
