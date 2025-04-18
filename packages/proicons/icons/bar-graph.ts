import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBarGraphIcon],svg[proicons-bar-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 21h18.5"></svg:path><svg:rect width="6" height="10" x="4" y="7.5" rx="2"></svg:rect><svg:rect width="6" height="15" x="14" y="2.5" rx="2"></svg:rect></svg:g>`,
})
export class ProiconsBarGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
