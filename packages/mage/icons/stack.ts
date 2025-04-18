import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStackIcon],svg[mage-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.27 7.796l-3.61 1.876l-4.392 2.236a.55.55 0 0 1-.536 0L7.341 9.672L3.73 7.796a.594.594 0 0 1 0-1.06l8.014-3.925a.57.57 0 0 1 .512 0l8.014 3.925a.594.594 0 0 1 0 1.06"></svg:path><svg:path d="m7.34 9.672l-3.61 1.723a.594.594 0 0 0 0 1.06l3.61 1.876l4.392 2.236a.55.55 0 0 0 .536 0l4.391-2.236l3.611-1.875a.594.594 0 0 0 0-1.014l-3.61-1.77"></svg:path><svg:path d="m7.34 14.33l-3.61 1.725a.594.594 0 0 0 0 1.06l8.002 4.065a.55.55 0 0 0 .536 0l8.002-4.065a.594.594 0 0 0 0-1.014l-3.61-1.77"></svg:path></svg:g>`,
})
export class MageStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
