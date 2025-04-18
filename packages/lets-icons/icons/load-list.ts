import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLoadListIcon],svg[lets-icons-load-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M3 4h18M5 4h14v11.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C17.48 19 16.92 19 15.8 19H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 17.48 5 16.92 5 15.8zm7 11V9"></svg:path><svg:path d="m9 12l2.894-2.894a.15.15 0 0 1 .212 0L15 12"></svg:path></svg:g>`,
})
export class LetsIconsLoadListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
