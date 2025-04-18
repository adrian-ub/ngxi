import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTicketAltDuotoneIcon],svg[lets-icons-ticket-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M19 20.138V3.862a.5.5 0 0 0-.748-.435l-2.256 1.29a1 1 0 0 1-.992 0l-2.21-1.263a1.6 1.6 0 0 0-1.588 0l-2.21 1.262a1 1 0 0 1-.992 0L5.748 3.427A.5.5 0 0 0 5 3.862v16.276a.5.5 0 0 0 .748.434l2.256-1.288a1 1 0 0 1 .992 0l2.21 1.262a1.6 1.6 0 0 0 1.588 0l2.21-1.262a1 1 0 0 1 .992 0l2.256 1.289a.5.5 0 0 0 .748-.435"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 9h4m-4 6h4m-4-3h4"></svg:path></svg:g>`,
})
export class LetsIconsTicketAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
