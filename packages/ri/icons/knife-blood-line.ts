import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKnifeBloodLineIcon],svg[ri-knife-blood-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.343 1.408L22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5L8 16.38V19a1 1 0 1 1-2 0v-4a1 1 0 0 0-1.993-.117L4.001 15v1a1 1 0 1 1-2 0V7.214A7.98 7.98 0 0 1 4.17 1.587zm.241 3.07l-.051.11a6 6 0 0 0-.522 2.103l-.01.31v.119a5.98 5.98 0 0 0 1.58 4.003l.176.185l6.364 6.364l2.828-2.829z"></svg:path>`,
})
export class RiKnifeBloodLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
