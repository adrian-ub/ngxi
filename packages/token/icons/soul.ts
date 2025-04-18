import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSoulIcon],svg[token-soul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.81 8.849H6.214c-1.762 0-3.19 1.412-3.19 3.154s1.428 3.153 3.19 3.153h11.594c1.762 0 3.19-1.412 3.19-3.153s-1.428-3.154-3.19-3.154"></svg:path><svg:path fill="currentColor" d="M9.746 3.932L3.936 9.72a3.174 3.174 0 0 0 0 4.502a3.205 3.205 0 0 0 4.52 0l5.81-5.787a3.175 3.175 0 0 0 0-4.502a3.205 3.205 0 0 0-4.52 0m5.798 5.846l-5.81 5.787a3.175 3.175 0 0 0 0 4.502a3.205 3.205 0 0 0 4.52 0l5.81-5.787a3.175 3.175 0 0 0 0-4.502a3.205 3.205 0 0 0-4.52 0"></svg:path>`,
})
export class TokenSoulIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
