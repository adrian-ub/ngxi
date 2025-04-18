import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextAlginmentLeftIcon],svg[ix-text-alginment-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 128V85.333h384V128zm0 149.333v-42.666h170.667v42.666zm0 149.334V384h298.667v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextAlginmentLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
