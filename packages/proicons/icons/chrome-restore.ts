import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsChromeRestoreIcon],svg[proicons-chrome-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 9.75a3.5 3.5 0 0 1 3.5-3.5h8a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-8a3.5 3.5 0 0 1-3.5-3.5z"></svg:path><svg:path d="M7.25 2.75h7.241v0a6.76 6.76 0 0 1 6.759 6.759v7.241"></svg:path></svg:g>`,
})
export class ProiconsChromeRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
