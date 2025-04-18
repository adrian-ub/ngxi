import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsReloadIcon],svg[zondicons-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24zM12 10h8l-4 4z"></svg:path>`,
})
export class ZondiconsReloadIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
