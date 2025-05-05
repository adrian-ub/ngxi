import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCarIcon],svg[picon-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5Q3 6 7 6M1 6q4 0 0-1m6-1c0-3-6-3-6 0m1 3q-2 3-2-3c0-4 8-4 8 0q0 6-2 3"></svg:path>`,
})
export class PiconCarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
