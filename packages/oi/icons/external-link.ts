import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiExternalLinkIcon],svg[oi-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h8V6H7v1H1V1h1V0zm4 0l1.5 1.5L3 4l1 1l2.5-2.5L8 4V0z"></svg:path>`,
})
export class OiExternalLinkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
