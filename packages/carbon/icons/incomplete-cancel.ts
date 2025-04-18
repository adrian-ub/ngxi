import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIncompleteCancelIcon],svg[carbon-incomplete-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 21.41L28.59 20L25 23.59L21.41 20L20 21.41L23.59 25L20 28.59L21.41 30L25 26.41L28.59 30L30 28.59L26.41 25zM14 26a12 12 0 0 1 0-24zm3.826-21.236a10 10 0 0 1 3.242 2.168L22.48 5.52a12 12 0 0 0-3.89-2.602zM26 14a11.9 11.9 0 0 0-.917-4.59l-1.847.764A9.9 9.9 0 0 1 24 14z"></svg:path>`,
})
export class CarbonIncompleteCancelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
