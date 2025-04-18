import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggUserlaneIcon],svg[gg-userlane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h6v6h-6zM3 12a9 9 0 1 0 18 0h-4a5 5 0 0 1-10 0zm3-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgUserlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
