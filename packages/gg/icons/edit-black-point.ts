import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditBlackPointIcon],svg[gg-edit-black-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m9 7a7 7 0 1 1 0-14a7 7 0 0 1 0 14"></svg:path></svg:g>`,
})
export class GgEditBlackPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
