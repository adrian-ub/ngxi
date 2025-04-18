import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTooltipsLineIcon],svg[majesticons-tooltips-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h.93a2 2 0 0 1 1.664.89l.574.862a1 1 0 0 0 1.664 0l.574-.861A2 2 0 0 1 11.07 12H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m6 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.93a2 2 0 0 0-1.664.89l-.574.862a1 1 0 0 1-1.664 0l-.574-.861A2 2 0 0 0 12.93 20H12a2 2 0 0 1-2-2v-1"></svg:path>`,
})
export class MajesticonsTooltipsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
