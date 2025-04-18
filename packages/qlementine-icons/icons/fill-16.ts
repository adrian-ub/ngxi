import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFill16Icon],svg[qlementine-icons-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.5A.5.5 0 0 1 .5 1h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 .5 9h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class QlementineIconsFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
