import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookInfoIcon],svg[proicons-book-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 16.25V5.75a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v12.5H7.375M4.5 16.245v2.38"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 21.25H7a2.5 2.5 0 0 1 0-5h12.5v4a1 1 0 0 1-1 1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 9.45v3.79"></svg:path><svg:circle cx="12" cy="6.217" r="1.197" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsBookInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
