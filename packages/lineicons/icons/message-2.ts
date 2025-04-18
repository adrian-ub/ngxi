import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMessage2Icon],svg[lineicons-message-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 6a2.25 2.25 0 0 1 2.25-2.25h14.5A2.25 2.25 0 0 1 21.5 6v10.548a2.25 2.25 0 0 1-2.25 2.25H7.635L3.75 22.277a.75.75 0 0 1-1.25-.559zm2.25-.75A.75.75 0 0 0 4 6v14.04l2.848-2.55a.75.75 0 0 1 .5-.192H19.25a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMessage2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
