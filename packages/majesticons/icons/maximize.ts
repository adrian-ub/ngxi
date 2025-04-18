import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMaximizeIcon],svg[majesticons-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20H4m0 0v-4m0 4l6-6m6-10h4m0 0v4m0-4l-6 6"></svg:path>`,
})
export class MajesticonsMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
