import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceTelecoilIcon],svg[guidance-telecoil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M19 16.5h5m-2.5.5v5m2-21.5L18 6m-6 6L.5 23.5M5.5 9a6.5 6.5 0 0 1 13 0c0 .662-.111 1.32-.328 1.944l-2.85 8.195A3.52 3.52 0 0 1 12 21.5c-.98 0-1.865-.352-2.5-1m6-11.5a3.5 3.5 0 1 0-7 0"></svg:path>`,
})
export class GuidanceTelecoilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
