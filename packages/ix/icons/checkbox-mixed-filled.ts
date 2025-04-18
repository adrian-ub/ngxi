import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxMixedFilledIcon],svg[ix-checkbox-mixed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H64v384h384zm-85.333 170.667H149.333v42.666h213.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxMixedFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
