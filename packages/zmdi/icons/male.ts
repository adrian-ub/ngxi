import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMaleIcon],svg[zmdi-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 3q18 0 30.5 12.5t12.5 30t-12.5 30T192 88t-30.5-12.5t-12.5-30t12.5-30T192 3m192 149H256v277h-43V301h-42v128h-43V152H0v-43h384z"></svg:path>`,
})
export class ZmdiMaleIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
