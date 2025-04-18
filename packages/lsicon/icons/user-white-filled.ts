import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserWhiteFilledIcon],svg[lsicon-user-white-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" d="M10 12.286L11.454 14L14 11"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-4.383 10.098A3.5 3.5 0 0 1 7 9.5h2c.38 0 .748.061 1.092.174l-.311.95A2.5 2.5 0 0 0 9 10.5H7a2.5 2.5 0 0 0-2.497 2.376a6.02 6.02 0 0 0 4.956.946l.242.97a7 7 0 1 1 5.123-5.226l-.975-.223Q14 8.695 14 8a6 6 0 0 0-6-6m0 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LsiconUserWhiteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
