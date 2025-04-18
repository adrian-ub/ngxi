import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewSplitVerticalIcon],svg[mdi-view-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h8v14h-8zM3 5h8v2H3zm0 6V9h8v2zm0 8v-2h8v2zm0-4v-2h8v2z"></svg:path>`,
})
export class MdiViewSplitVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
