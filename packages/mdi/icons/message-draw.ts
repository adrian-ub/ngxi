import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageDrawIcon],svg[mdi-message-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-7.5l2-2H18M6 14v-2.5l6.88-6.86c.19-.19.51-.19.71 0l1.76 1.77c.2.2.2.51 0 .71L8.47 14M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMessageDrawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
