import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaseline2kPlusIcon],svg[ic-baseline-2k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.5 8.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1zm4.75 3.5l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zM20 12.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20z"></svg:path>`,
})
export class IcBaseline2kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
