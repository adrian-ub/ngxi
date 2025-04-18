import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlashTriangleOutlineIcon],svg[mdi-flash-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1 21h22M12 6l7.5 13h-15m9.5-5h-1.5l1.5-3h-4v4h1v3z"></svg:path>`,
})
export class MdiFlashTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
