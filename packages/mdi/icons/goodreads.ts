import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoodreadsIcon],svg[mdi-goodreads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12.77c-1.04 1.65-2.78 2.73-4.75 2.73c-3.18 0-5.75-2.8-5.75-6.25S9.07 3 12.25 3c1.97 0 3.71 1.08 4.75 2.73V3h1v12.25c0 5.46-3.46 5.75-6.5 5.75c-2.5 0-3.95-1.69-4.37-4h1.01c.36 1.75 1.4 3 3.36 3c2.22 0 5.5.05 5.5-4.75zM12.25 4C9.63 4 7.5 6.35 7.5 9.25s2.13 5.25 4.75 5.25S17 12.15 17 9.25S14.87 4 12.25 4"></svg:path>`,
})
export class MdiGoodreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
