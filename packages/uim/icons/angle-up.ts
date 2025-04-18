import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAngleUpIcon],svg[uim-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.243 15.121a1 1 0 0 1-.707-.293L12 11.293l-3.536 3.535a1 1 0 0 1-1.414-1.414l4.243-4.242a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1-.707 1.707"></svg:path>`,
})
export class UimAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
