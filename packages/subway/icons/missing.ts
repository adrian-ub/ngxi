import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMissingIcon],svg[subway-missing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M499.5 385.4L308.9 57.2c-31.8-52.9-74.1-52.9-105.9 0L12.5 385.4c-31.8 52.9 0 95.3 63.5 95.3h360c63.5 0 95.3-42.4 63.5-95.3m-201.1 52.9h-84.7v-84.7h84.7zm0-127h-84.7V120.7h84.7z"></svg:path>`,
})
export class SubwayMissingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
