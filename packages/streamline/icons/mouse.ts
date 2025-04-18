import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMouseIcon],svg[streamline-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 6.5a3.5 3.5 0 1 0-7 0V10a3.5 3.5 0 1 0 7 0zM1 7h7"></svg:path><svg:path d="M4.5 7V2.75A2.25 2.25 0 0 1 6.75.5v0A2.25 2.25 0 0 1 9 2.75V3a2 2 0 1 0 4 0V1.5"></svg:path></svg:g>`,
})
export class StreamlineMouseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
