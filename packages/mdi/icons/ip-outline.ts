import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIpOutlineIcon],svg[mdi-ip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 7H7v10h2zm6 0h-4v10h2v-4h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 4h-2V9h2z"></svg:path>`,
})
export class MdiIpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
