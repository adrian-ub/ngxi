import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleOutlineIcon],svg[mdi-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L1 21h22M12 6l7.53 13H4.47"></svg:path>`,
})
export class MdiTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
