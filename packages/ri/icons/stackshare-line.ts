import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStackshareLineIcon],svg[ri-stackshare-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1a3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1a3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1H13zm9.464 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiStackshareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
