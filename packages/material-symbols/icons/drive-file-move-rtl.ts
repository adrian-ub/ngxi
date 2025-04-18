import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileMoveRtlIcon],svg[material-symbols-drive-file-move-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.025 17.025l1.4-1.4L11.8 14H16v-2h-4.2l1.625-1.625l-1.4-1.4L8 13l4.025 4.025ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4Z"></svg:path>`,
})
export class MaterialSymbolsDriveFileMoveRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
