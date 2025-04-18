import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHematologyOutlineIcon],svg[healthicons-hematology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M32.012 27.13c.003 4.4-3.514 7.86-7.994 7.863s-8.003-3.45-8.006-7.85S24 12.993 24 12.993s8.008 10.051 8.012 14.137"></svg:path></svg:g>`,
})
export class HealthiconsHematologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
