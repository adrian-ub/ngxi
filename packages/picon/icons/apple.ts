import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAppleIcon],svg[picon-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2q0-2 2-2q0 2-2 2M3 8Q1 7 1 4q1-3 3-1.5Q6 1 7 3Q5 5 7 6Q6 9 4 7.5"></svg:path>`,
})
export class PiconAppleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
