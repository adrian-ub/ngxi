import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitEthereumIcon],svg[formkit-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 1l-.09.31v8.88l.09.09l4-2.44z"></svg:path><svg:path fill="currentColor" d="M5 1L1 7.84l4 2.44zm0 10.62l-.05.06v3.17L5 15l4-5.81l-4 2.44Z"></svg:path><svg:path fill="currentColor" d="M5 15v-3.38L1 9.18l4 5.81Zm0-4.72l4-2.44l-4-1.87zM1 7.84l4 2.44V5.97z"></svg:path>`,
})
export class FormkitEthereumIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
