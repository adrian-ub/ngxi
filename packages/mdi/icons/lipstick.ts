import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLipstickIcon],svg[mdi-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 23c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1zm1-12c-.55 0-1-.45-1-1V5.25S11 3 11.75 1c1.08.67 2.17 1.33 2.71 2.83S15 7.67 15 10c0 .55-.45 1-1 1z"></svg:path>`,
})
export class MdiLipstickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
