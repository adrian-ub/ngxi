import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MoneyRublCircleFillIcon],svg[f7-money-rubl-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24m-2.78-32.169h3.34c3.069 0 4.611 1.607 4.611 4.151c0 2.56-1.542 4.183-4.628 4.183H25.22zm4.198 11.197c4.421 0 7.332-2.99 7.332-7.062c0-4.087-2.847-7.109-7.22-7.109h-7.825v12.358H18.57v1.813h3.134v3.085H18.57v1.797h3.134v3.467h3.514V35.91h6.378v-1.797h-6.378v-3.085z"></svg:path>`,
})
export class F7MoneyRublCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
