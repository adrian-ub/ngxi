import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMountain11Icon],svg[maki-mountain-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.518 1.232a.556.556 0 0 0-.495.268l-4 6.66c-.222.37.045.84.477.84h8c.432 0 .7-.47.477-.84l-4-6.66a.556.556 0 0 0-.46-.268zm.002.922L8.431 7H7.76L6.416 5.773L5.519 7l-.894-1.227L3.281 7H2.61l2.91-4.846z" fill="currentColor"></svg:path>`,
})
export class MakiMountain11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
