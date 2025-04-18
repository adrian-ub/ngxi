import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInboxArrowDownOutlineIcon],svg[mdi-inbox-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 19v-2h3.13a4.13 4.13 0 0 0 1.27 2m9.6 0h-4.4a4.13 4.13 0 0 0 1.27-2H19m0-2h-5v1a2 2 0 0 1-4 0v-1H5V5h14m-3 5h-2V7h-4v3H8l4 4"></svg:path>`,
})
export class MdiInboxArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
