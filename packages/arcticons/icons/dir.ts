import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDirIcon],svg[arcticons-dir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.791 33.099V14.9m5.617 0c5.965 0 10.8 4.074 10.801 9.1h0c0 5.026-4.836 9.1-10.8 9.1h0z"></svg:path>`,
})
export class ArcticonsDirIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
