import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap0Icon],svg[openmoji-keycap-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.875 12.166h48V60h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.125 11.916h48v48h-48z"></svg:path><svg:path d="M35.875 44.78a4.76 4.76 0 0 1-4.76-4.76v-7.874a4.76 4.76 0 0 1 4.76-4.76h0a4.76 4.76 0 0 1 4.76 4.76v7.874a4.76 4.76 0 0 1-4.76 4.76"></svg:path></svg:g>`,
})
export class OpenmojiKeycap0Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
