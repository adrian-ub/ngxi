import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconArcheryIcon],svg[picon-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V4h8L6 5M1 0c7 0 7 8 0 8m1-1c5 0 5-6 0-6z"></svg:path>`,
})
export class PiconArcheryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
