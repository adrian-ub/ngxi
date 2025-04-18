import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDragHorizontalIcon],svg[mdi-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2z"></svg:path>`,
})
export class MdiDragHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
