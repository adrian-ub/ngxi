import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFloppyDiskIcon],svg[streamline-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 12.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V4.91a1 1 0 0 1 .29-.7L4.21.79a1 1 0 0 1 .7-.29h7.59a1 1 0 0 1 1 1z"></svg:path><svg:path d="M10.5 13.5V9a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v4.5m7-13V4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V.5"></svg:path></svg:g>`,
})
export class StreamlineFloppyDiskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
