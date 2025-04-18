import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBook1Icon],svg[lineicons-book-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75zM9 9V6.5h6V9z"></svg:path><svg:path fill="currentColor" d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25V19a3 3 0 0 0 3 3h11.25a.75.75 0 0 0 0-1.5H18v-3h.75a.75.75 0 0 0 .75-.75V4.25A2.25 2.25 0 0 0 17.25 2zM18 16H7.5c-.546 0-1.059.146-1.5.401V4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75zm-1.5 1.5v3h-9a1.5 1.5 0 0 1 0-3z"></svg:path>`,
})
export class LineiconsBook1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
