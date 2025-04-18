import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAddLargeIcon],svg[carbon-add-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"></svg:path>`,
})
export class CarbonAddLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
