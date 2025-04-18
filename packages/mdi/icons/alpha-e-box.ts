import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaEBoxIcon],svg[mdi-alpha-e-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v10h6v-2h-4v-2h4v-2h-4V9h4V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiAlphaEBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
