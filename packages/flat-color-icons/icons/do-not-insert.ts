import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDoNotInsertIcon],svg[flat-color-icons-do-not-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#7CB342"><svg:path d="m31 29l-7 7l-7-7z"></svg:path><svg:path d="M22 7h4v25h-4z"></svg:path><svg:path d="M42 18c-3.3 0-6 2.7-6 6v12c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2V24c0-3.3-2.7-6-6-6H4v4h2c1.1 0 2 .9 2 2v12c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V24c0-1.1.9-2 2-2h2v-4z"></svg:path></svg:g><svg:path fill="#37474F" d="M3.563 6.396L6.39 3.568l37.966 37.966l-2.828 2.828z"></svg:path>`,
})
export class FlatColorIconsDoNotInsertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
