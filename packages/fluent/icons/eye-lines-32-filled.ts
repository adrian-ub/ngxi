import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEyeLines32FilledIcon],svg[fluent-eye-lines-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.627 6c1.931-1.188 4.36-2 7.373-2c5.369 0 8.886 2.58 11.032 5.268a16.5 16.5 0 0 1 2.263 3.797c.234.55.404 1.039.517 1.433c.103.354.188.728.188 1.002s-.085.648-.188 1.002c-.113.394-.283.884-.517 1.433a16.5 16.5 0 0 1-2.263 3.797C24.886 24.42 21.369 27 16 27c-3.012 0-5.441-.812-7.373-2H16v-1.5H6.629a15 15 0 0 1-1.842-2H16v-1a5 5 0 0 0 0-10v-1H4.787l.181-.232A15 15 0 0 1 6.628 7.5H16V6zm5.19 5H3.764c-.43.713-.77 1.395-1.03 2h8.936a5 5 0 0 1 2.149-2M11.1 14.5H2.187c-.102.354-.187.727-.187 1s.085.646.187 1H11.1a5 5 0 0 1 0-2m.569 3.5H2.733c.26.605.6 1.288 1.03 2h10.055a5 5 0 0 1-2.15-2"></svg:path>`,
})
export class FluentEyeLines32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
