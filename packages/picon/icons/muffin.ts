import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMuffinIcon],svg[picon-muffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.5L0 2l2-2l3 1l2-1l1 2l-1 1.5M2 8L1 4h6L6 8"></svg:path>`,
})
export class PiconMuffinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
