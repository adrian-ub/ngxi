import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckDuotoneLineIcon],svg[lets-icons-chield-check-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M18.545 6.152L12.63 3.617a1.6 1.6 0 0 0-1.26 0L5.455 6.152a1.6 1.6 0 0 0-.957 1.67l.613 4.903a6.6 6.6 0 0 0 2.324 4.252l3.54 2.95a1.6 1.6 0 0 0 2.05 0l3.54-2.95a6.6 6.6 0 0 0 2.324-4.252l.613-4.904a1.6 1.6 0 0 0-.957-1.669Z"></svg:path><svg:path d="m9 12l2.569 2.569a.5.5 0 0 0 .77-.077L16 9"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
