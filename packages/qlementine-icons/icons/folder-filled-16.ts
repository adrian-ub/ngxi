import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFolderFilled16Icon],svg[qlementine-icons-folder-filled-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2H5a1 1 0 0 1 .8.4l.9 1.2a1 1 0 0 0 .8.4h5A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5"></svg:path>`,
})
export class QlementineIconsFolderFilled16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
