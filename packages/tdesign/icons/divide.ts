import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDivideIcon],svg[tdesign-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2.004v2.004H11zm-4.5 4h11v2h-11zm4.5 4h2.004v2.004H11z"></svg:path>`,
})
export class TdesignDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
