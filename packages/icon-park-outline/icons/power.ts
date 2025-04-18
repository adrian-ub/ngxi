import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePowerIcon],svg[icon-park-outline-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.5 8a19 19 0 0 0-4.75 3.84C6.794 15.146 5 19.49 5 24.246C5 34.603 13.507 43 24 43s19-8.397 19-18.754c0-4.757-1.794-9.1-4.75-12.406A19 19 0 0 0 33.5 8M24 4v20"></svg:path>`,
})
export class IconParkOutlinePowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
