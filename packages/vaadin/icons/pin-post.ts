import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPinPostIcon],svg[vaadin-pin-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4V3H9c0-1.69 1-2 1-2V0H5v1s1 .31 1 2H0v12h2v1h14V4zm-1 10H1V4h4v1h2v2h1V5h2V4h4z"></svg:path>`,
})
export class VaadinPinPostIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
