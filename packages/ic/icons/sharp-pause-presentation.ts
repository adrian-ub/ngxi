import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPausePresentationIcon],svg[ic-sharp-pause-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v18h22V3zm20 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z"></svg:path>`,
})
export class IcSharpPausePresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
