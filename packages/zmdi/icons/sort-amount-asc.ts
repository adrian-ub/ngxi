import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSortAmountAscIcon],svg[zmdi-sort-amount-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64h128v43H0zm0 256v-43h384v43zm0-149h256v42H0z"></svg:path>`,
})
export class ZmdiSortAmountAscIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
