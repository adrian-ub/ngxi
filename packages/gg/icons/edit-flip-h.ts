import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditFlipHIcon],svg[gg-edit-flip-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M18 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3v2h3a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-3v2z"></svg:path><svg:path d="M13 3h-2v18h2zM5 8a1 1 0 0 1 1-1h3V5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v-2H6a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class GgEditFlipHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
