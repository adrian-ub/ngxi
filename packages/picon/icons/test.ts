import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTestIcon],svg[picon-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1L0 5V1m0 6h8V3M7 8L3 0h4M1 0v8h4M2 6V5h1v1m3-3V2H5v1"></svg:path>`,
})
export class PiconTestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
