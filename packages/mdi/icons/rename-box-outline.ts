import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRenameBoxOutlineIcon],svg[mdi-rename-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17h-5.5l2-2H17M7 17v-2.5l7.9-7.8c.2-.2.5-.2.7 0l1.8 1.8c.2.2.2.5 0 .7L9.5 17M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiRenameBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
