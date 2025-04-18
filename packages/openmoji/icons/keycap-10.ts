import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap10Icon],svg[openmoji-keycap-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.875 12.166h48V60h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.125 11.916h48v48h-48z"></svg:path><svg:path d="M39.822 44.442a4.643 4.643 0 0 1-4.643-4.643v-7.681a4.643 4.643 0 0 1 4.643-4.643h0a4.643 4.643 0 0 1 4.643 4.643v7.681a4.643 4.643 0 0 1-4.643 4.643M25.535 31.05l4.644-3.48v16.776"></svg:path></svg:g>`,
})
export class OpenmojiKeycap10Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
