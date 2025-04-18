import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiSignalIcon],svg[oi-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0v8h1V0zM4 1v7h1V1zM2 3v5h1V3zM0 5v3h1V5z"></svg:path>`,
})
export class OiSignalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
