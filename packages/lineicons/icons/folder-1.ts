import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFolder1Icon],svg[lineicons-folder-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a2.25 2.25 0 0 1 2.25-2.25H8.5a2.25 2.25 0 0 1 1.8.9l1.35 1.8a.75.75 0 0 0 .6.3h7.5A2.25 2.25 0 0 1 22 9v9a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 18zm2.25-.75A.75.75 0 0 0 3.5 6v12c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-7.5a2.25 2.25 0 0 1-1.8-.9L9.1 5.55a.75.75 0 0 0-.6-.3z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsFolder1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
