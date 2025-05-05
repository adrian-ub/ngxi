import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconListIcon],svg[picon-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V6h5v2M3 5V3h5v2M0 8V6h2v2M0 5V3h2v2M0 2V0h2v2m1 0V0h5v2"></svg:path>`,
})
export class PiconListIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
