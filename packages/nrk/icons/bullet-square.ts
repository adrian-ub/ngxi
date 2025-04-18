import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkBulletSquareIcon],svg[nrk-bullet-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h8v8H8z"></svg:path>`,
})
export class NrkBulletSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
