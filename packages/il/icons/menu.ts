import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilMenuIcon],svg[il-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M649 94H0V1h649zm0 231H0v-92h649zm0 232H0v-93h649z"></svg:path>`,
})
export class IlMenuIcon {
  readonly viewBox = input("0 0 650 750")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
