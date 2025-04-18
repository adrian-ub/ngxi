import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMultipleInputsIcon],svg[flat-color-icons-multiple-inputs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90A4AE" d="M40 35v5H8v-5H4v5c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-5z"></svg:path><svg:g fill="#1565C0"><svg:path d="M24 23.4L17 15h14z"></svg:path><svg:path d="M22 4h4v14h-4zm9.5 22.9l-.7 1.1l3.5 1.9l.6-1.2c1.6-3 2.6-4.7 3.5-5.2S41 23 44 23v-4c-7.7 0-8.4.4-12.5 7.9"></svg:path><svg:path d="m38.4 31l-9 4L28 25zm-21.9-4.1l.6 1.2l-3.5 1.9l-.6-1.2c-1.6-3-2.6-4.7-3.5-5.2C8.7 23 7 23 4 23v-4c7.7 0 8.4.4 12.5 7.9"></svg:path><svg:path d="m20 25l-1.4 10l-9-4z"></svg:path></svg:g>`,
})
export class FlatColorIconsMultipleInputsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
