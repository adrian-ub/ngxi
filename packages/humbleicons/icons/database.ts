import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsDatabaseIcon],svg[humbleicons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m16 6c0 1.657-3.582 3-8 3s-8-1.343-8-3"></svg:path><svg:ellipse cx="12" cy="6" rx="8" ry="3"></svg:ellipse><svg:path d="M4 6v12M20 6v12"></svg:path></svg:g>`,
})
export class HumbleiconsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
