import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeleteSweepOutlineIcon],svg[mdi-delete-sweep-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zm-4-2v8H5v-8zm2-2H3v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zm1-3h-3l-1-1H6L5 5H2v2h12z"></svg:path>`,
})
export class MdiDeleteSweepOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
