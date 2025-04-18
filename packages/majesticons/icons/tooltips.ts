import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTooltipsIcon],svg[majesticons-tooltips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M12 2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h.93a2 2 0 0 1 1.664.89l.574.862a1 1 0 0 0 1.664 0l.574-.861A2 2 0 0 1 11.07 12H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path><svg:path d="M18 10h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.93a2 2 0 0 0-1.664.89l-.574.862a1 1 0 0 1-1.664 0l-.574-.861A2 2 0 0 0 12.93 20H12a2 2 0 0 1-2-2v-1"></svg:path></svg:g>`,
})
export class MajesticonsTooltipsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
