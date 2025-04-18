import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiOvhcloudIcon],svg[cbi-ovhcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.568 10.412L20.7 6.7a10 10 0 0 1-.961 11.253h-5.514l1.7-2.951h-2.247l2.647-4.594zm-1.934-4.369L9.778 17.95v.007h-5.52A10 10 0 0 1 3.3 6.7l3.578 6.219l3.954-6.873z"></svg:path>`,
})
export class CbiOvhcloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
