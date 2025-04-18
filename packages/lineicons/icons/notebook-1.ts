import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsNotebook1Icon],svg[lineicons-notebook-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25v2H3.25a.75.75 0 0 0 0 1.5H4.5v3.5H3.25a.75.75 0 0 0 0 1.5H4.5v3.5H3.25a.75.75 0 0 0 0 1.5H4.5v2A2.25 2.25 0 0 0 6.75 22h10.5a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 17.25 2zM6 17.75h1.25a.75.75 0 0 0 0-1.5H6v-3.5h1.25a.75.75 0 0 0 0-1.5H6v-3.5h1.25a.75.75 0 0 0 0-1.5H6v-2a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsNotebook1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
