import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCapacityPenFilledIcon],svg[ix-capacity-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 85.334H64V256h170.667zm192 0h-128v127.999h128zM64 277.333h170.667V448H64zm366.667-15.999L485.333 316l-34.457 34.458l-54.667-54.667zm-49.543 49.542l54.667 54.667L332 469.334h-54.667v-54.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityPenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
