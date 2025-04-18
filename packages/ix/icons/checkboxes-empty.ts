import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesEmptyIcon],svg[ix-checkboxes-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64H64v298.667h42.667v-256h256zM448 149.333H149.333V448H448zM405.333 192v213.333H192V192z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
