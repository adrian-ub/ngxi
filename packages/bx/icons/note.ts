import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxNoteIcon],svg[bx-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8a1 1 0 0 0 .707-.293l7-7a1 1 0 0 0 .196-.293c.014-.03.022-.061.033-.093a1 1 0 0 0 .051-.259c.002-.021.013-.041.013-.062V5c0-1.103-.897-2-2-2M5 5h14v7h-6a1 1 0 0 0-1 1v6H5zm9 12.586V14h3.586z"></svg:path>`,
})
export class BxNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
