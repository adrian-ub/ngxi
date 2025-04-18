import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap3Icon],svg[openmoji-keycap-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M12 12.166h48V60H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.25 11.916h48v48h-48z"></svg:path><svg:path d="M31.419 41.115A4.776 4.776 0 0 0 36.2 44.57h0a4.63 4.63 0 0 0 4.88-4.327a4.63 4.63 0 0 0-4.88-4.327a4.63 4.63 0 0 0 4.88-4.327a4.63 4.63 0 0 0-4.88-4.327h0a4.776 4.776 0 0 0-4.781 3.455"></svg:path></svg:g>`,
})
export class OpenmojiKeycap3Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
