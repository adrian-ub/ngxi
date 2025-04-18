import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPrioMiddleIcon],svg[ix-prio-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333v341.333H128zm170.667 0H384v341.333h-85.333z"></svg:path>`,
})
export class IxPrioMiddleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
