import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldDuotoneLineIcon],svg[lets-icons-chield-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M18.555 5.156L12.63 2.617a1.6 1.6 0 0 0-1.26 0l-5.924 2.54a1.6 1.6 0 0 0-.96 1.647l.65 5.862a6.6 6.6 0 0 0 2.335 4.341l3.505 2.92a1.6 1.6 0 0 0 2.048 0l3.505-2.92a6.6 6.6 0 0 0 2.334-4.341l.651-5.862a1.6 1.6 0 0 0-.96-1.648Z"></svg:path>`,
})
export class LetsIconsChieldDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
