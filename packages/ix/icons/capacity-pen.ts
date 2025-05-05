import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCapacityPenIcon],svg[ix-capacity-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64H64v384h170.667v-42.667h-128v-128h128v107.162l42.666-42.667zm-42.666 170.667h-128v-128h128zM448 192H320V64h128zm-42.667-85.333h-42.666v42.666h42.666zm4 133.333L464 294.667l-34.458 34.457l-54.666-54.666zm-49.542 49.542l54.667 54.667L310.667 448H256v-54.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
