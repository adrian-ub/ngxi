import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloppyIcon],svg[mdi-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5.5L18.5 3H17v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3zm7 1v5h3V4zm-5 8h10a1 1 0 0 1 1 1v6H6v-6a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiFloppyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
