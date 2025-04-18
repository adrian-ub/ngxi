import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFunnelIcon],svg[vaadin-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11h4v4H6zm7.6-6L16 1H0l2.4 4zM3 6l2.4 4h5.2L13 6z"></svg:path>`,
})
export class VaadinFunnelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
