import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBingIcon],svg[ps-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v246q2 64 69 109t161 45q95 0 162.5-46.5T462 242t-67.5-111.5T232 84q-82 0-147 36V0zm230 137q61 0 104 31t43 74t-43 74t-104 31t-104-31t-43-74t43-74t104-31m-97 105q0-29 28.5-49t68.5-20t68.5 20t28.5 49t-28.5 49.5T232 312t-68.5-20.5T135 242"></svg:path>`,
})
export class PsBingIcon {
  readonly viewBox = input("0 0 464 456")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
