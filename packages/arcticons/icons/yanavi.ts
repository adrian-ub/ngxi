import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYanaviIcon],svg[arcticons-yanavi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.5 5.5l-37 15.83l19 2.22zm0 0l-18 18.05l2.23 19zm-37 15.83L20 28l6.68 14.5l-2.23-18.95z"></svg:path>`,
})
export class ArcticonsYanaviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
