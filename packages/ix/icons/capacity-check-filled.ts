import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCapacityCheckFilledIcon],svg[ix-capacity-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 85.334H64V256h170.667zm192 0h-128v127.999h128zM64 277.333h170.667V448H64zm432.911 45.004l-33.819-26.014l-92.829 120.655l-68.214-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityCheckFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
