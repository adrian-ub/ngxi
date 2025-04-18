import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSortAmountDescIcon],svg[zmdi-sort-amount-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320v-43h128v43zM0 64h384v43H0zm0 149v-42h256v42z"></svg:path>`,
})
export class ZmdiSortAmountDescIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
