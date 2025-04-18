import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faThLargeIcon],svg[fa-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896v384q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V896q0-52 38-90t90-38h512q52 0 90 38t38 90m0-768v384q0 52-38 90t-90 38H128q-52 0-90-38T0 512V128q0-52 38-90t90-38h512q52 0 90 38t38 90m896 768v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90V896q0-52 38-90t90-38h512q52 0 90 38t38 90m0-768v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90V128q0-52 38-90t90-38h512q52 0 90 38t38 90"></svg:path>`,
})
export class FaThLargeIcon {
  readonly viewBox = input("0 0 1664 1408")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
