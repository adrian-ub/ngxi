import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextAlginmentRightIcon],svg[ix-text-alginment-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 128V85.334h384V128zm213.333 149.333v-42.666H448v42.666zm-128 149.334V384H448v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextAlginmentRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
