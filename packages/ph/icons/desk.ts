import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeskIcon],svg[ph-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M32 80h88v48H32Zm192 48h-88V80h88ZM96 104a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m64 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhDeskIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
