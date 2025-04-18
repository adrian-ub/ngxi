import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKeycap6Icon],svg[fluent-emoji-flat-keycap-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M19.117 10.618a1.75 1.75 0 1 0-2.984-1.83l-4.531 7.391a1.8 1.8 0 0 0-.177.387a5.25 5.25 0 1 0 5.8-2.863zm-4.71 8.226a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKeycap6Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
