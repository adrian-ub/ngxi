import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBellIcon],svg[oi-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C2.9 0 2 .9 2 2C2 3.04 1.48 3.98.66 4.66C.25 5 0 5.48 0 6h8c0-.52-.24-1-.66-1.34C6.52 3.98 6 3.04 6 2a2 2 0 0 0-2-2M3 7c0 .55.45 1 1 1s1-.45 1-1z"></svg:path>`,
})
export class OiBellIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
