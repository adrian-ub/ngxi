import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelStaroffIcon],svg[raphael-staroff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22.375L7.116 28.83l3.396-10.438l-8.883-6.458l10.978.002L16.002 1.5l3.39 10.434h10.982l-8.886 6.457l3.396 10.44zm6.98 3.834l-2.665-8.206l6.98-5.062h-8.628L16 4.73l-2.666 8.205H4.708l6.98 5.07l-2.667 8.203L16 21.146z"></svg:path>`,
})
export class RaphaelStaroffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
