import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBottles02Icon],svg[carbon-bottles-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9.051V6a1 1 0 0 0-1-1h-3v2h2v3.02s2 1.124 2 3.48V25h-4v2h5a1 1 0 0 0 1-1V13.5a5.93 5.93 0 0 0-2-4.449m-8 0V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.051A5.93 5.93 0 0 0 6 13.5V26a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13.5a5.93 5.93 0 0 0-2-4.449M16 25H8V13.5c0-2.356 2-3.48 2-3.48V7h4v3.02s2 1.124 2 3.48z"></svg:path>`,
})
export class CarbonBottles02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
