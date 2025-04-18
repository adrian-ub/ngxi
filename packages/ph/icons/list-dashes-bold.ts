import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListDashesBoldIcon],svg[ph-list-dashes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 64a12 12 0 0 1 12-12h120a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m132 52H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24m0 64H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24M56 52H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhListDashesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
