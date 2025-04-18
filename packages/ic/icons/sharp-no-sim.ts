import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNoSimIcon],svg[ic-sharp-no-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.79 3.74L2.38 5.15l2.74 2.74l-.12.12V21h13.27l1.58 1.62l1.41-1.41zM19 16.11V3h-8.99L7.95 5.06z"></svg:path>`,
})
export class IcSharpNoSimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
