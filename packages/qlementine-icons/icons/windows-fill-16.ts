import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWindowsFill16Icon],svg[qlementine-icons-windows-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.21L1 2.996v4.5h5.5v-5.29zm1-.14V7.5H15V1zm-1 6.43H1V13l5.5.786v-5.29zm1 5.4V8.47H15v6.5z"></svg:path>`,
})
export class QlementineIconsWindowsFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
