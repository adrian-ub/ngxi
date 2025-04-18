import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDovetailIconIcon],svg[logos-dovetail-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#230078" d="m256 182.857l-64 36.572v-73.143l-64-36.974l64-36.17l64 36.572zm-128.01-73.143l-64 36.572V73.143L0 36.57L64 0l63.99 36.571zm0 146.286l-64 36.571l.01-73.142l-64-36.572l63.99-36.571l64 36.571z"></svg:path>`,
})
export class LogosDovetailIconIcon {
  readonly viewBox = input("0 0 256 293")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
