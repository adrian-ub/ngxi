import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsWatchIcon],svg[zondicons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2v2H9V7h2zm-5.82 6.08a6.98 6.98 0 0 1 0-10.16L6 0h8l.82 4.92a6.98 6.98 0 0 1 0 10.16L14 20H6zM10 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path>`,
})
export class ZondiconsWatchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
