import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiAdoreIcon],svg[cbi-adore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.78 9.073H3.22A1.366 1.366 0 0 0 2 10.537v1.951a1.365 1.365 0 0 0 1.22 1.463h6.341a1.05 1.05 0 0 0 .976.976h2.926a1.05 1.05 0 0 0 .976-.976h6.341A1.365 1.365 0 0 0 22 12.488v-1.951a1.366 1.366 0 0 0-1.22-1.464m0 3.9H3.22a.85.85 0 0 1-.488-.244c0-.488.244-.732.488-.732h17.56c.244 0 .244.244.244.488a.85.85 0 0 1-.244.488"></svg:path>`,
})
export class CbiAdoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
