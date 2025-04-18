import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiApiOffIcon],svg[mdi-api-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11H5V9h2m7-2h-2.62l1.91 2H14v.75l1.87 1.96c.08-.21.13-.46.13-.71V9a2 2 0 0 0-2-2M4.45 2.62L3 4l2.86 3H5c-1.1 0-2 .9-2 2v8h2v-4h2v4h2v-6.7l1 1.04V17h2v-3.55l7.55 7.93L21 20m-.1-3h.1v-2h-1V9h1V7h-4v2h1v4.95Z"></svg:path>`,
})
export class MdiApiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
