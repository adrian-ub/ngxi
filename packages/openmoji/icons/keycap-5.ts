import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap5Icon],svg[openmoji-keycap-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.75 12.166h48V60h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 11.916h48v48H12z"></svg:path><svg:path d="M31.867 41.804a4.2 4.2 0 0 0 3.95 2.767h.115a4.2 4.2 0 0 0 4.201-4.202v-.901a4.2 4.2 0 0 0-4.201-4.201h-4.065v-8.005h8.266"></svg:path></svg:g>`,
})
export class OpenmojiKeycap5Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
