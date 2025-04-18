import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLoadbarDocIcon],svg[gg-loadbar-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17 5H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M7 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"></svg:path></svg:g>`,
})
export class GgLoadbarDocIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
