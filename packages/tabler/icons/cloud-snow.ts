import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCloudSnowIcon],svg[tabler-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18a4.6 4.4 0 0 1 0-9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7m-8-3v.01m0 3v.01m0 3v.01m4-4v.01m0 3v.01"></svg:path>`,
})
export class TablerCloudSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
