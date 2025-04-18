import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity10FilledIcon],svg[tdesign-city-10-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.004 7.998H6v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M14 10V.72l-12 3V22h14v-7h2v7h4V10zm-2-6.72V20H4V5.28z"></svg:path>`,
})
export class TdesignCity10FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
