import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFloppyDiskOffIcon],svg[pepicons-pop-floppy-disk-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 3.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L17.914 4.5a2 2 0 0 1 .586 1.414V16.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V5.914L14.086 3.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5 11a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7H7v7H5zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a1 1 0 1 0-2 0v2h-4V3a1 1 0 0 0-2 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFloppyDiskOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
