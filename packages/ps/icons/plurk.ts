import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPlurkIcon],svg[ps-plurk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M289 4H6v461h117V338h283V4zm0 218H123V120h166z"></svg:path>`,
})
export class PsPlurkIcon {
  readonly viewBox = input("0 0 408 488")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
