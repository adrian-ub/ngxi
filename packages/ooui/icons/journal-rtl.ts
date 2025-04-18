import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiJournalRtlIcon],svg[ooui-journal-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0v20h1.5c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM2 18c0 1.1.9 2 2 2h10V0H4C2.9 0 2 .9 2 2zM4 5h8v1H4zm3 2h5v1H7z"></svg:path>`,
})
export class OouiJournalRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
