import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMapIcon],svg[ls-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 637l220-83V57L0 140zm469 0l-221-83V57l221 83zm28 0l220-83V57l-220 83z"></svg:path>`,
})
export class LsMapIcon {
  readonly viewBox = input("0 0 717 637")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
