import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardOffIcon],svg[mdi-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.88 18.68L7.2 4H20c1.11 0 2 .89 2 2v12c0 .24-.04.47-.12.68m-1.32 1.23h.01L2.39 1.73L1.11 3l1.54 1.54C2.25 4.9 2 5.42 2 6v12a2 2 0 0 0 2 2h14.11l2.73 2.73l1.27-1.27z"></svg:path>`,
})
export class MdiCardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
