import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLineOutIcon],svg[lets-icons-line-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M9 15v3c0 .943 0 1.414-.293 1.707S7.943 20 7 20H6c-.943 0-1.414 0-1.707-.293S4 18.943 4 18v-1c0-.943 0-1.414.293-1.707S5.057 15 6 15zm6-11h5v5m0-5L9 15"></svg:path>`,
})
export class LetsIconsLineOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
