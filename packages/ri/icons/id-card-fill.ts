import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riIdCardFillIcon],svg[ri-id-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm12 3v2h6V8zm5 4h-5v2h5zm-7.5-2a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0M8 13.5A3.5 3.5 0 0 0 4.5 17h7A3.5 3.5 0 0 0 8 13.5"></svg:path>`,
})
export class RiIdCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
