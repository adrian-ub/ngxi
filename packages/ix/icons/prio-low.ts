import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPrioLowIcon],svg[ix-prio-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 85.333h85.333v341.333h-85.333z"></svg:path>`,
})
export class IxPrioLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
