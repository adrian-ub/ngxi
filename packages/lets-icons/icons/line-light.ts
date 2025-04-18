import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLineLightIcon],svg[lets-icons-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 15v3c0 .943 0 1.414-.293 1.707S7.943 20 7 20H6c-.943 0-1.414 0-1.707-.293S4 18.943 4 18v-1c0-.943 0-1.414.293-1.707S5.057 15 6 15zm6-6V6c0-.943 0-1.414.293-1.707S16.057 4 17 4h1c.943 0 1.414 0 1.707.293S20 5.057 20 6v1c0 .943 0 1.414-.293 1.707S18.943 9 18 9zm0 0l-6 6"></svg:path>`,
})
export class LetsIconsLineLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
