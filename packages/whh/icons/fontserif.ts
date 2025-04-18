import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFontserifIcon],svg[whh-fontserif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 192q0-53-28-90.5T736 64H608q-40 0-68 37.5T512 192v672q0 40 37.5 68t90.5 28v64H256v-64q53 0 90.5-28t37.5-68V192q0-53-28-90.5T288 64H160q-40 0-68 37.5T64 192H0V0h896v192z"></svg:path>`,
})
export class WhhFontserifIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
