import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMinus16Icon],svg[qlementine-icons-minus-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMinus16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
