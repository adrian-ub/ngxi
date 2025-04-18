import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsXrayOutline24pxIcon],svg[healthicons-xray-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9 17v4a1 1 0 1 0 2 0v-4zm4 0v4a1 1 0 1 0 2 0v-4z"></svg:path><svg:path fill-rule="evenodd" d="M5 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm1.5 6.5v-6h4.75v.913c-.573.06-1.136.191-1.585.416a.75.75 0 1 0 .67 1.342c.219-.11.539-.197.915-.247v.879a5.2 5.2 0 0 0-2.166.823a.75.75 0 0 0 .832 1.248a3.7 3.7 0 0 1 1.334-.55V14.5zm6.25-1.176V14.5h4.75v-6h-4.75v.913c.573.06 1.136.191 1.585.416a.75.75 0 1 1-.67 1.342c-.219-.11-.539-.197-.915-.247v.879a5.2 5.2 0 0 1 2.166.823a.75.75 0 1 1-.832 1.248a3.7 3.7 0 0 0-1.334-.55" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsXrayOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
