import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiConsolidateIcon],svg[mdi-consolidate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h2V4h2v5a2 2 0 0 1-2 2h-2v2l-3-3l3-3m-4 3a2 2 0 1 0-2 2a2 2 0 0 0 2-2M2 11v5h2v-5h2v2l3-3l-3-3v2H4a2 2 0 0 0-2 2m13 5l-3-3l-3 3h2v2a2 2 0 0 0 2 2h5v-2h-5v-2"></svg:path>`,
})
export class MdiConsolidateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
