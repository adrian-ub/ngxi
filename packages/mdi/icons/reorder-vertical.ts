import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReorderVerticalIcon],svg[mdi-reorder-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v18h2V3zM5 3v18h2V3zm8 0v18h2V3zm6 0h-2v18h2z"></svg:path>`,
})
export class MdiReorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
