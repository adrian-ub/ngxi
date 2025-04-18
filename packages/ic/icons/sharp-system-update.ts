import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSystemUpdateIcon],svg[ic-sharp-system-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v22h14V1zm12 18H7V5h10zm-1-6h-3V8h-2v5H8l4 4z"></svg:path>`,
})
export class IcSharpSystemUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
