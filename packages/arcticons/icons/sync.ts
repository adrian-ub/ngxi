import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSyncIcon],svg[arcticons-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 10.268L13.327 24h21.346z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.42 5.867L13.327 24h27.744a.95.95 0 0 0 .75-1.534l-12.9-16.599a.95.95 0 0 0-1.501 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 37.732L34.673 24H13.327z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.58 42.133L34.673 24H6.929a.95.95 0 0 0-.75 1.534l12.9 16.599a.95.95 0 0 0 1.501 0"></svg:path>`,
})
export class ArcticonsSyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
