import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageMoveIcon],svg[mdi-image-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h4V0l5 5l-5 5V7h-4zm6 8.94V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.06c-.06.33-.06.67-.06 1a8 8 0 0 0 8 8c.33 0 .67 0 1-.06M19 18l-4.5-6l-3.5 4.5l-2.5-3L5 18z"></svg:path>`,
})
export class MdiImageMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
