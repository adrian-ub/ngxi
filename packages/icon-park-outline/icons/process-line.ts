import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineProcessLineIcon],svg[icon-park-outline-process-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40h10M4 32h20m-2 8h5m10 0h7m-9-8h9m-12-8h12m-28 0h6M4 24h2m-2-8h4M4 8h7l8 8h25M22 8h22"></svg:path>`,
})
export class IconParkOutlineProcessLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
