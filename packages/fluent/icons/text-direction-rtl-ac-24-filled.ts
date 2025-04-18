import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRtlAc24FilledIcon],svg[fluent-text-direction-rtl-ac-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M18 4a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2h-1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm-8 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.25c0 1.105-.216 2.506-.958 3.664C14.261 12.136 12.945 13 11 13a1 1 0 1 1 0-2c1.255 0 1.94-.51 2.358-1.164c.458-.717.642-1.69.642-2.586V7h-3a1 1 0 0 1-1-1zm-5.707 8.293a1 1 0 0 1 1.414 1.414L5.414 16H20a1 1 0 1 1 0 2H5.414l.293.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2zm1.414-8a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.414 10H8a1 1 0 1 0 0-2H5.414l.293-.293a1 1 0 0 0 0-1.414z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTextDirectionRtlAc24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
