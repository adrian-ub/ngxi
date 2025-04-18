import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorCombineIcon],svg[mdi-vector-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v4c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-4V3c0-1.11-.89-2-2-2zm0 2h11v4H9c-1.11 0-2 .89-2 2v5H3zm6 6h5v5H9zm7 0h4v11H9v-4h5c1.11 0 2-.89 2-2z"></svg:path>`,
})
export class MdiVectorCombineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
