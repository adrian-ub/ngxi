import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWomanaltIcon],svg[whh-womanalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 416L320 608l128 224q0 10-38.5 26T320 885v107q0 13-9.5 22.5T288 1024H160q-13 0-22.5-9.5T128 992V884q-51-10-89.5-26.5T0 832l32.5-57L97 662.5l31-54.5q1 1-12-18.5l-32-48L46 485l-32.5-48.5L0 416q0-13 63.5-35T192 354v-34H0q7-11 17.5-28.5T46 231t18-71q0-66 47-113T224 0t113 47t47 113q0 28 16 68t32 66l16 26H256v34q65 5 128.5 26.5T448 416"></svg:path>`,
})
export class WhhWomanaltIcon {
  readonly viewBox = input("0 0 448 1024")
  readonly width = input("0.44em")
  readonly height = input("1em")
}
