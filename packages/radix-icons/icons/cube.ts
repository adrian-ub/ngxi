import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCubeIcon],svg[radix-icons-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.289.797a.5.5 0 0 1 .422 0l6 2.8A.5.5 0 0 1 14 4.05v6.9a.5.5 0 0 1-.289.453l-6 2.8a.5.5 0 0 1-.422 0l-6-2.8A.5.5 0 0 1 1 10.95v-6.9a.5.5 0 0 1 .289-.453zM2 4.806L7 6.93v6.034l-5-2.333zm6 8.159l5-2.333V4.806L8 6.93zm-.5-6.908l4.772-2.028L7.5 1.802L2.728 4.029z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCubeIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
