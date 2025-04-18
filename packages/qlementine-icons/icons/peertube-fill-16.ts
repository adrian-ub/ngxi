import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPeertubeFill16Icon],svg[qlementine-icons-peertube-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 15.5V.6c0-.422.471-.674.822-.44l11.2 7.47a.53.53 0 0 1 0 .88l-11.2 7.47A.529.529 0 0 1 2 15.54zm.66-7.91l4.86-3.24a.529.529 0 0 1 .822.44v6.48a.529.529 0 0 1-.822.44L2.66 8.47a.53.53 0 0 1 0-.88" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsPeertubeFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
