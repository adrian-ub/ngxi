import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiJournalLtrIcon],svg[ooui-journal-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18.5A1.5 1.5 0 0 0 3.5 20H5V0H3.5A1.5 1.5 0 0 0 2 1.5zM6 0v20h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7 8H8V7h5zm3-2H8V5h8z"></svg:path>`,
})
export class OouiJournalLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
