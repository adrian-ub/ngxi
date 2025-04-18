import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilNotesIcon],svg[uil-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0-4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m4-6h-3V3a1 1 0 0 0-2 0v1h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1m-1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2Z"></svg:path>`,
})
export class UilNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
