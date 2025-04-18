import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsWindowOpenIcon],svg[zondicons-window-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2 2v12h16V5zm8 3l4 5H6z"></svg:path>`,
})
export class ZondiconsWindowOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
