import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldIcon],svg[lets-icons-chield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m18.712 4.789l-5.924-2.54a2 2 0 0 0-1.576 0L5.288 4.79a2 2 0 0 0-1.2 2.059l.651 5.862a7 7 0 0 0 2.476 4.604l3.505 2.92a2 2 0 0 0 2.56 0l3.505-2.92a7 7 0 0 0 2.476-4.604l.651-5.862a2 2 0 0 0-1.2-2.06Z"></svg:path>`,
})
export class LetsIconsChieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
