import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDivideIcon],svg[mage-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M19.5 12.001h-15"></svg:path><svg:path stroke-width="2.5" d="M11.994 17.314h.012m-.012-10.628h.012"></svg:path></svg:g>`,
})
export class MageDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
