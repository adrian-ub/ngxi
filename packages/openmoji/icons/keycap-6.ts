import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycap6Icon],svg[openmoji-keycap-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.875 12.124h48v47.834h-48z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.125 11.874h48v48h-48z"></svg:path><svg:circle cx="36.125" cy="39.913" r="4.659"></svg:circle><svg:path d="m36.125 27.177l-3.816 10.066"></svg:path></svg:g>`,
})
export class OpenmojiKeycap6Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
