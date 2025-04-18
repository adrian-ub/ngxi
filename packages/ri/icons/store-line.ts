import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStoreLineIcon],svg[ri-store-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A4 4 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a4 4 0 0 1-1 2.646m-2 1.228a4.01 4.01 0 0 1-4-1.228A4 4 0 0 1 12 13a4 4 0 0 1-3-1.354a3.99 3.99 0 0 1-4 1.228V20h14zM14 9a1 1 0 1 1 2 0a2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0a1 1 0 0 1 2 0a2 2 0 1 0 4 0"></svg:path>`,
})
export class RiStoreLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
