import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRenameBoxIcon],svg[mdi-rename-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17h-7.5l2-2H18M6 17v-2.5l7.88-7.85c.19-.2.51-.2.71 0l1.76 1.76c.2.2.2.51 0 .71L8.47 17M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiRenameBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
