import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextAlginmentCenterIcon],svg[ix-text-alginment-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 128V85.334h384V128zm106.667 149.333v-42.666h170.666v42.666zm-64 149.334V384h298.666v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextAlginmentCenterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
