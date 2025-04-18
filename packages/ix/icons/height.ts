import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHeightIcon],svg[ix-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 85.333V42.667H128v42.666h127.999l-79.085 79.085l30.17 30.17l27.583-27.583v178.018l-27.584-27.583l-30.17 30.17l79.057 79.057H128v42.666h256v-42.666H256.027l79.056-79.057l-30.17-30.17l-27.58 27.58V167.007l27.581 27.581l30.17-30.17l-79.085-79.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxHeightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
