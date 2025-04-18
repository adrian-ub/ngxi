import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLineInLightIcon],svg[lets-icons-line-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15 9V6c0-.943 0-1.414.293-1.707S16.057 4 17 4h1c.943 0 1.414 0 1.707.293S20 5.057 20 6v1c0 .943 0 1.414-.293 1.707S18.943 9 18 9zM9 20H4v-5m0 5L15 9"></svg:path>`,
})
export class LetsIconsLineInLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
