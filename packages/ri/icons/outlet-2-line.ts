import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riOutlet2LineIcon],svg[ri-outlet-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M11 7h2v4h-2zm3 5h2v4h-2zm-6 0h2v4H8z"></svg:path>`,
})
export class RiOutlet2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
