import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPrescriptionIcon],svg[la-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v16h2v-6h4.994l4.776 8.828L13.107 29h2.385l3.9-6h.215l3.9 6h2.386l-4.649-7.148L25.24 15h-2.314l-3.412 5.85l-4.483-8.29A5 5 0 0 0 18 8c0-2.757-2.243-5-5-5zm2 2h5c1.654 0 3 1.346 3 3s-1.346 3-3 3H8z"></svg:path>`,
})
export class LaPrescriptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
