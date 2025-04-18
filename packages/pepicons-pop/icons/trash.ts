import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTrashIcon],svg[pepicons-pop-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5"></svg:path><svg:path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8m-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopTrashIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
