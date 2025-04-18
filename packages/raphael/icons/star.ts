import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelStarIcon],svg[raphael-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22.375L7.116 28.83l3.396-10.438l-8.883-6.458l10.978.002L16.002 1.5l3.39 10.434h10.982l-8.886 6.457l3.396 10.44z"></svg:path>`,
})
export class RaphaelStarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
