import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap8Icon],svg[openmoji-keycap-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.75 12.416h48V60.25h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12.166h48v48H12z"></svg:path><svg:path d="M31.34 40.518a4.346 4.346 0 0 0 4.345 4.346h.63a4.346 4.346 0 0 0 4.346-4.346h0a4.346 4.346 0 0 0-4.346-4.346h-.63a4.346 4.346 0 0 0-4.346 4.346m.001-8.704a4.346 4.346 0 0 0 4.345 4.346h.63a4.346 4.346 0 0 0 4.346-4.346h0a4.346 4.346 0 0 0-4.346-4.346h-.63a4.346 4.346 0 0 0-4.346 4.346"></svg:path></svg:g>`,
})
export class OpenmojiKeycap8Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
