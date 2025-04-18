import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimSquareIcon],svg[uim-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="20" height="20" x="2" y="2" fill="currentColor" rx="1"></svg:rect>`,
})
export class UimSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
