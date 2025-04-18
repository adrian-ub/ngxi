import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTaurusIcon],svg[fluent-emoji-flat-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M24 6.5c-2.24 0-4.37.8-6.01 2.25c-.55.48-1.26.75-1.99.75s-1.44-.27-1.99-.75C12.37 7.3 10.24 6.5 8 6.5c-.55 0-1 .45-1 1s.45 1 1 1c1.74 0 3.4.61 4.67 1.73A8.01 8.01 0 0 0 8 17.5c0 4.41 3.59 8 8 8s8-3.59 8-8a8.01 8.01 0 0 0-4.67-7.27C20.6 9.11 22.26 8.5 24 8.5c.55 0 1-.45 1-1s-.45-1-1-1m-2 11c0 3.31-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTaurusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
