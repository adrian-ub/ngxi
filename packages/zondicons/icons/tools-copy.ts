import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsToolsCopyIcon],svg[zondicons-tools-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0s8 7.58 8 12a8 8 0 1 1-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0 0 10 6zM8 0a3 3 0 1 0 0 6z"></svg:path>`,
})
export class ZondiconsToolsCopyIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
