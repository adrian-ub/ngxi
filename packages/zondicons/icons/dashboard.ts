import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsDashboardIcon],svg[zondicons-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m-5.6-4.29a9.95 9.95 0 0 1 11.2 0a8 8 0 1 0-11.2 0m6.12-7.64l3.02-3.02l1.41 1.41l-3.02 3.02a2 2 0 1 1-1.41-1.41"></svg:path>`,
})
export class ZondiconsDashboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
