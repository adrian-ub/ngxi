import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCursorTextIcon],svg[mdi-cursor-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19a1 1 0 0 0 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H8v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8V2h2.5c.55 0 1.5.45 1.5 1c0-.55.95-1 1.5-1H16v2h-2a1 1 0 0 0-1 1z"></svg:path>`,
})
export class MdiCursorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
