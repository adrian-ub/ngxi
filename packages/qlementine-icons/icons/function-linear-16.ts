import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFunctionLinear16Icon],svg[qlementine-icons-function-linear-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 2.5a2.5 2.5 0 0 1-3.88 2.086l-7.54 7.54a2.5 2.5 0 1 1-4.586 1.38a2.5 2.5 0 0 1 3.88-2.086l7.54-7.54A2.5 2.5 0 1 1 16 2.5m-1 0a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 15 2.5M2.5 15a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 2.5 15" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsFunctionLinear16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
