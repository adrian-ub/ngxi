import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCaptionsIcon],svg[gg-captions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 8v2H8v4h3v2H6V8zm7 0v2h-3v4h3v2h-5V8z"></svg:path><svg:path fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 13V6h16v12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCaptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
