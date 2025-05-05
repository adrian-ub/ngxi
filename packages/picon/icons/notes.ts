import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNotesIcon],svg[picon-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6C6 9 3 4 7 4V1.5L3 3v4c-2 3-5-2-1-2V2l6-2"></svg:path>`,
})
export class PiconNotesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
