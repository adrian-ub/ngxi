import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLeftArrowCurvingRightIcon],svg[fluent-emoji-flat-left-arrow-curving-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M13.358 7c-3.865.002-6.997 3.359-6.997 7.5c0 4.142 3.134 7.5 7 7.5h6.75a.25.25 0 0 1 .25.25v2.41a.75.75 0 0 0 1.301.509l4.23-4.578a.75.75 0 0 0 0-1.018l-4.23-4.578a.75.75 0 0 0-1.3.51v2.245a.25.25 0 0 1-.25.25h-6.75c-1.402 0-3-1.303-3-3.5s1.598-3.5 3-3.5h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLeftArrowCurvingRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
