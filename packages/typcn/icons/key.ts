import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnKeyIcon],svg[typcn-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 11c0 .732.166 1.424.449 2.051L5 17v1.5S5.896 20 7 20h2v-2h2v-2h2.5c2.762 0 5-2.238 5-5s-2.238-5-5-5s-5 2.238-5 5m5 2a2 2 0 1 1 .001-4.001A2 2 0 0 1 13.5 13"></svg:path>`,
})
export class TypcnKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
