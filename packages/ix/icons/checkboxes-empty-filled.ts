import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesEmptyFilledIcon],svg[ix-checkboxes-empty-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64H64v298.667h42.667v-256h256zm-213.334 85.333H448V448H149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesEmptyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
