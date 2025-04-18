import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBarberPoleIcon],svg[openmoji-barber-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#D0CFCE" d="M48.5 16h-23a2 2 0 1 1 0-4h23a2 2 0 1 1 0 4m0 44h-23a2 2 0 1 1 0-4h23a2 2 0 1 1 0 4"></svg:path><svg:path fill="#EA5A47" d="M26 16h22v40H26z"></svg:path><svg:path fill="#FFF" d="M41.822 16L26 25v-4l8.462-5zM26 37l22-13v-4L26 33zm22-5L26 45v4l22-13zm0 12L27.692 56h6.77L48 48z"></svg:path><svg:path fill="#92D3F5" d="M48 16h-6.178L26 25v8l22-13zm0 28L27.692 56H26v-7l22-13z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M48.5 16h-23a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2m0 44h-23a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2M26 16h22v40H26z"></svg:path><svg:path d="M41.822 16L26 25v-4l8.462-5zM26 37l22-13v-4L26 33zm22-5L26 45v4l22-13zm0 12L27.692 56h6.77L48 48z"></svg:path><svg:path d="M48 16h-6.178L26 25v8l22-13zm0 28L27.692 56H26v-7l22-13z"></svg:path></svg:g>`,
})
export class OpenmojiBarberPoleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
