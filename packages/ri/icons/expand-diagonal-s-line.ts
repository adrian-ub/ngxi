import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandDiagonalSLineIcon],svg[ri-expand-diagonal-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.586 7H12V5h7v7h-2V8.414L8.414 17H12v2H5v-7h2v3.586z"></svg:path>`,
})
export class RiExpandDiagonalSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
