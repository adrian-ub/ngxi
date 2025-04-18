import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonIcon],svg[arcticons-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M34.18 23.914c1.367-.554 3.8-1.29 4.533-.402c.792.96-.21 3.045-1.131 4.665"></svg:path><svg:path d="M9 24.557c2.162 1.716 8.548 4.344 15.352 4.344c6.485 0 10.445-2.35 12.498-3.785"></svg:path></svg:g>`,
})
export class ArcticonsAmazonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
