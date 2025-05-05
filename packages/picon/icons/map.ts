import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMapIcon],svg[picon-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V3L3 1v4M0 8V2l3-2l3 2l2-2v6L6 8L3 6"></svg:path>`,
})
export class PiconMapIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
