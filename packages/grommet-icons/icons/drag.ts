import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDragIcon],svg[grommet-icons-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M15 5h2V3h-2zM7 5h2V3H7zm8 8h2v-2h-2zm-8 0h2v-2H7zm8 8h2v-2h-2zm-8 0h2v-2H7z"></svg:path>`,
})
export class GrommetIconsDragIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
