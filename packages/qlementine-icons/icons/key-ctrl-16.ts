import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsKeyCtrl16Icon],svg[qlementine-icons-key-ctrl-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2c.175 0 .341.073.46.202l4.37 4.75a.624.624 0 1 1-.92.847l-3.73-4.05a.25.25 0 0 0-.367 0l-3.73 4.05a.625.625 0 1 1-.92-.847l4.38-4.75A.63.63 0 0 1 8.003 2z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsKeyCtrl16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
