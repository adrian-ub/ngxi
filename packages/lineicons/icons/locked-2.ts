import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLocked2Icon],svg[lineicons-locked-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 7.25a5.25 5.25 0 1 1 10.5 0v1.875h1.25a2.25 2.25 0 0 1 2.25 2.25v5.875A4.75 4.75 0 0 1 16 22H8a4.75 4.75 0 0 1-4.75-4.75v-5.875a2.25 2.25 0 0 1 2.25-2.25h1.25zm1.5 1.875h7.5V7.25a3.75 3.75 0 1 0-7.5 0zm-2.75 1.5a.75.75 0 0 0-.75.75v5.875A3.25 3.25 0 0 0 8 20.5h8a3.25 3.25 0 0 0 3.25-3.25v-5.875a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLocked2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
