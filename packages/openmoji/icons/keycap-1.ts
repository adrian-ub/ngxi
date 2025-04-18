import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap1Icon],svg[openmoji-keycap-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.875 12.291h48v47.834h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.125 12.041h48v48h-48z"></svg:path><svg:path d="m31.664 30.895l4.8-3.59l.122 17.472"></svg:path></svg:g>`,
})
export class OpenmojiKeycap1Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
