import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherDatabaseIcon],svg[feather-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="5" rx="9" ry="3"></svg:ellipse><svg:path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></svg:path><svg:path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></svg:path></svg:g>`,
})
export class FeatherDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
