import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKnifeLineIcon],svg[ri-knife-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.343 1.408L22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587zm.241 3.07l-.051.11a6 6 0 0 0 1.048 6.535l.176.185l6.364 6.364l2.828-2.829z"></svg:path>`,
})
export class RiKnifeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
