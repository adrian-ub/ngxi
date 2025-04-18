import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesIcon],svg[ix-checkboxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h298.667v42.667h-256v256H64zm315.325 183.993l-98.66 123.326l-59.325-47.46l26.653-33.318l25.991 20.819l72.024-90.02zM448 149.333H149.333V448H448zM405.333 192v213.333H192V192z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
