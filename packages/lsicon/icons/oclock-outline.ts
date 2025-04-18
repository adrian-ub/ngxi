import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOclockOutlineIcon],svg[lsicon-oclock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 6L8 8l4-3.5M8 3v1m0 8v1M3 8h1m8 0h1m1.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0ZM9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class LsiconOclockOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
