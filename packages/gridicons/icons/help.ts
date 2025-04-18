import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsHelpIcon],svg[gridicons-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m1 16h-2v-2h2zm0-4.141V15h-2v-2a1 1 0 0 1 1-1c1.103 0 2-.897 2-2s-.897-2-2-2s-2 .897-2 2H8a4 4 0 0 1 8 0a3.99 3.99 0 0 1-3 3.859"></svg:path>`,
})
export class GridiconsHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
