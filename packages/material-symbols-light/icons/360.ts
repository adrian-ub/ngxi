import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight360Icon],svg[material-symbols-light-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.539 18.73l-.708-.707l2.135-2.146q-2.912-.386-4.939-1.452T3 12q0-1.614 2.618-2.807T12 8t6.382 1.193T21 12q0 1.089-1.364 2.064T16 15.562V14.55q1.925-.5 2.963-1.237T20 12q0-.858-2.137-1.929T12 9t-5.863 1.071T4 12q0 .716 1.66 1.601q1.66.886 4.202 1.253L7.83 12.823l.707-.707l3.308 3.307z"></svg:path>`,
})
export class MaterialSymbolsLight360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
