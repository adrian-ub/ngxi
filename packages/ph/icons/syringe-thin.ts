import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSyringeThinIcon],svg[ph-syringe-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 69.17l-48-48a4 4 0 0 0-5.66 5.66L202.34 48L168 82.34l-37.17-37.17a4 4 0 1 0-5.66 5.66l9.17 9.17l-86.83 86.83a12 12 0 0 0-3.51 8.48v51l-22.83 22.86a4 4 0 0 0 5.66 5.66L49.66 212h51a11.93 11.93 0 0 0 8.48-3.51L196 121.66l9.17 9.17a4 4 0 0 0 5.66-5.66L173.66 88L208 53.66l21.17 21.17a4 4 0 1 0 5.66-5.66M103.51 202.83a4 4 0 0 1-2.82 1.17H52v-48.69a4 4 0 0 1 1.17-2.82L74 131.66l23.17 23.17a4 4 0 1 0 5.66-5.66L79.66 126L98 107.66l23.17 23.17a4 4 0 0 0 5.66-5.66L103.66 102L140 65.66l25.17 25.17L190.34 116Z"></svg:path>`,
})
export class PhSyringeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
