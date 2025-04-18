import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMessageSuccessIcon],svg[icon-park-outline-message-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 36H21l-10 5v-5H4V6h40v11m-32-3h6m-6 6h12"></svg:path><svg:path d="m29 30l6 5l9-11"></svg:path></svg:g>`,
})
export class IconParkOutlineMessageSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
