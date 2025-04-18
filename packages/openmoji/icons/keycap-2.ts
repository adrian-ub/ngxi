import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap2Icon],svg[openmoji-keycap-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M12 12.166h48V60H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.25 11.916h48v48h-48z"></svg:path><svg:path d="M31.03 31.498a5.33 5.33 0 0 1 5.22-4.255h0a5.3 5.3 0 0 1 3.768 1.561a4.115 4.115 0 0 1-.046 5.58l-9.05 10.205h10.656"></svg:path></svg:g>`,
})
export class OpenmojiKeycap2Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
