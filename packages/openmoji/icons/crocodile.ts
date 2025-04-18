import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCrocodileIcon],svg[openmoji-crocodile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#5C9E31" stroke="#5C9E31" d="M46 52s17 2 19 0v-1s3-3 1-4s-5 0-5 0s-2.917-1.333-6.458-4.667c0 0-1.542-1.333-3.542.667c0 0-2-3-8-3s-24 1-24 1s-6-1 0-3s11-2 12 0c0 0-2.667-8.417-17.333-5.208C13.667 32.792 1 36 8 48c0 0 2 4 8 4z"></svg:path><svg:path fill="#B1CC33" stroke="#B1CC33" d="M23 47s-4.812 4-3.406 5S23 55 23 55h4l-3.032-3S26 51 27 49s0-3.24 0-3.24M40 47s-4.812 4-3.406 5S40 55 40 55h4l-3.032-3S43 51 44 49s0-3.24 0-3.24"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M29 52h4m13 0s17 2 19 0v-1s3-3 1-4s-5 0-5 0s-2.917-1.333-6.458-4.667c0 0-1.542-1.333-3.542.667c0 0-2-3-8-3s-24 1-24 1s-6-1 0-3s11-2 12 0c0 0-2.667-8.417-17.333-5.208C13.667 32.792 1 36 8 48c0 0 2 4 8 4"></svg:path><svg:path d="M23 47s-4.812 4-3.406 5S23 55 23 55h4l-3.032-3S26 51 27 49s0-3.24 0-3.24M40 47s-4.812 4-3.406 5S40 55 40 55h4l-3.032-3S43 51 44 49s0-3.24 0-3.24"></svg:path></svg:g>`,
})
export class OpenmojiCrocodileIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
