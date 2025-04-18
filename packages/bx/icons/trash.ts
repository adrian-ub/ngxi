import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTrashIcon],svg[bx-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></svg:path><svg:path fill="currentColor" d="M9 10h2v8H9zm4 0h2v8h-2z"></svg:path>`,
})
export class BxTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
