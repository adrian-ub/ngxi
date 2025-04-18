import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkTrashIcon],svg[nrk-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1a2 2 0 0 0-2 2v2H2v2h3v16h14V7h3V5h-5V3a2 2 0 0 0-2-2zm6 4V3H9v2zM7 7h10v14H7zm2 2h2v10H9zm6 0h-2v10h2z" clip-rule="evenodd"></svg:path>`,
})
export class NrkTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
