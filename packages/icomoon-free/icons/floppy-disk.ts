import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeFloppyDiskIcon],svg[icomoon-free-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 0H0v16h16V2zM8 2h2v4H8zm6 12H2V2h1v5h9V2h1.172l.828.828z"></svg:path>`,
})
export class IcomoonFreeFloppyDiskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
