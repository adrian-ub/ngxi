import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsKeyReturn16Icon],svg[qlementine-icons-key-return-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5a.5.5 0 0 1 1 0v1.63a.87.87 0 0 1-.866.866h-8.43l1.15 1.15a.5.5 0 0 1-.707.709l-2-2a.5.5 0 0 1 0-.708l2-2a.501.501 0 0 1 .707.707l-1.15 1.15h8.29v-1.5zM14.5 2h-13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5H7a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5m0-1a1.5 1.5 0 0 1 1.499 1.499v11a1.5 1.5 0 0 1-1.499 1.499h-6a1.5 1.5 0 0 1-1.499-1.499v-1.5h-5.5A1.5 1.5 0 0 1 .002 10.5v-8a1.5 1.5 0 0 1 1.499-1.499z"></svg:path>`,
})
export class QlementineIconsKeyReturn16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
