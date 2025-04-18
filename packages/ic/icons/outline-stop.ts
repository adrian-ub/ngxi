import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineStopIcon],svg[ic-outline-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8v8H8V8zm2-2H6v12h12z"></svg:path>`,
})
export class IcOutlineStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
