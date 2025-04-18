import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLollipopOffIcon],svg[tabler-lollipop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416-1.57a7 7 0 1 0-9.884-9.915"></svg:path><svg:path d="M21 10a3.5 3.5 0 0 0-7 0m-1.29 2.715A3.5 3.5 0 0 1 7 10m7 7c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0 0 14 10m0-7a3.5 3.5 0 0 0-3.5 3.5M3 21l6-6M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLollipopOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
