import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFile16Icon],svg[qlementine-icons-file-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1c-1.1 0-2 .895-2 2v10c0 1.1.895 2 2 2h8c1.1 0 2-.895 2-2V5.5a.5.5 0 0 0-.146-.354l-4-4A.5.5 0 0 0 9.5 1zM3 3a1 1 0 0 1 1-1h5v3.5a.5.5 0 0 0 .5.5H13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9.29 2L10 2.71V5z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsFile16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
