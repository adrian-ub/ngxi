import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaTrash2FillIcon],svg[eva-trash-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2M10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4ZM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class EvaTrash2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
