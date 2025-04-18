import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVenmoIcon],svg[mdi-venmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19.5 3c.64 1.08.94 2.19.94 3.6c0 4.48-3.83 10.31-6.94 14.4H6.41L3.56 4l6.21-.61l1.51 12.11c1.41-2.29 3.14-5.89 3.14-8.34c0-1.35-.23-2.26-.59-3.01L19.5 3z" fill="currentColor"></svg:path>`,
})
export class MdiVenmoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
