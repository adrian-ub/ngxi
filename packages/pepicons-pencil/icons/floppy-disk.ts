import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFloppyDiskIcon],svg[pepicons-pencil-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.5 2.75a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5.664a.5.5 0 0 0-.146-.353l-2.415-2.415a.5.5 0 0 0-.353-.146zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h10.586a1.5 1.5 0 0 1 1.06.44l2.415 2.414A1.5 1.5 0 0 1 18 5.664V16.25a1.5 1.5 0 0 1-1.5 1.5h-13a1.5 1.5 0 0 1-1.5-1.5z"></svg:path><svg:path d="M5.5 10.75A1.5 1.5 0 0 1 7 9.25h6a1.5 1.5 0 0 1 1.5 1.5v7h-1v-7a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v7h-1zm.5-6a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilFloppyDiskIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
