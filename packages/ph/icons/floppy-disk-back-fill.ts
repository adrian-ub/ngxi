import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackFillIcon],svg[ph-floppy-disk-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m44-104a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V48h88Z"></svg:path>`,
})
export class PhFloppyDiskBackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
