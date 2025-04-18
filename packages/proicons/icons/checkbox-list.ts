import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCheckboxListIcon],svg[proicons-checkbox-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.25 4.5h11"></svg:path><svg:rect width="3.5" height="3.5" x="2.75" y="2.75" rx="1.2"></svg:rect><svg:path d="M10.25 12h11"></svg:path><svg:rect width="3.5" height="3.5" x="2.75" y="10.25" rx="1.2"></svg:rect><svg:path d="M10.25 19.5h11"></svg:path><svg:rect width="3.5" height="3.5" x="2.75" y="17.75" rx="1.2"></svg:rect></svg:g>`,
})
export class ProiconsCheckboxListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
