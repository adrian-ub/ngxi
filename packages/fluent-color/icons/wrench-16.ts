import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWrench16Icon],svg[fluent-color-wrench-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWrench160)" d="M11 1a4 4 0 0 0-3.896 4.91l-5.05 5.235a1.986 1.986 0 0 0 2.842 2.774l5.006-5.072a4.003 4.003 0 0 0 5.062-4.382a.5.5 0 0 0-.849-.287L12 6.293L9.707 4l2.115-2.115a.5.5 0 0 0-.287-.85A4 4 0 0 0 11 1"></svg:path><svg:defs><svg:lineargradient id="fluentColorWrench160" x1="6.984" x2="9.394" y1="1.844" y2="14.986" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2BDABE"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWrench16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
