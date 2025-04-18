import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaginationIcon],svg[lineicons-pagination-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.72 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L4.31 12l3.47-3.47a.75.75 0 1 0-1.06-1.06zm19.56 1.06a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L20.69 12l-3.47 3.47a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill="currentColor" d="M8.5 11.1a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m3.1.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4 0a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0"></svg:path>`,
})
export class LineiconsPaginationIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
