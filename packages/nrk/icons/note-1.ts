import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkNote1Icon],svg[nrk-note-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 5v2h-4v10l-2 2H6v-8h6V5zm-6 8H8v4h3.172l.828-.828z" clip-rule="evenodd"></svg:path>`,
})
export class NrkNote1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
