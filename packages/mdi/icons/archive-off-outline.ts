import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveOffOutlineIcon],svg[mdi-archive-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.2 5l-2-2H21v6h-8.8l-2-2H19V5zM20 16.8V10h-2v4.8zm0 2.55v-.01l-2-2v.01L9.66 9l-2-2l-1.53-1.53l-3.74-3.74L1.11 3L3 4.89V9h4.11l10 10H6v-9H4v11h15.11l1.73 1.73l1.27-1.27z"></svg:path>`,
})
export class MdiArchiveOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
