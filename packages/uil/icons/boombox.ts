import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBoomboxIcon],svg[uil-boombox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-3.62-8.2A3 3 0 0 0 15 9a3 3 0 0 0-6 0a3 3 0 0 0 .62 1.8a4 4 0 1 0 4.76 0M12 8a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 8a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class UilBoomboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
