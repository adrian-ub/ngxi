import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBoundingBoxIcon],svg[hugeicons-bounding-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 4h4m-6 6V6m8 0v4m-6 2h4m4 0h4m2 2v4m-8-4v4m2 2h4"></svg:path><svg:circle cx="4" cy="4" r="2"></svg:circle><svg:circle cx="4" cy="12" r="2"></svg:circle><svg:circle cx="12" cy="4" r="2"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:circle cx="20" cy="12" r="2"></svg:circle><svg:circle cx="12" cy="20" r="2"></svg:circle><svg:circle cx="20" cy="20" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsBoundingBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
