import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPrioHighIcon],svg[ix-prio-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 85.333h85.333v341.333H64zm149.333 0h85.334v341.333h-85.334zm149.334 0H448v341.333h-85.333z"></svg:path>`,
})
export class IxPrioHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
