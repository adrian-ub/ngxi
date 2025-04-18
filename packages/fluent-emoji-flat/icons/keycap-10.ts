import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKeycap10Icon],svg[fluent-emoji-flat-keycap-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M20 7.75a6 6 0 0 0-6 6v4.5a6 6 0 0 0 12 0v-4.5a6 6 0 0 0-6-6m-2.5 6a2.5 2.5 0 0 1 5 0v4.5a2.5 2.5 0 0 1-5 0zM12 9.5a1.75 1.75 0 0 0-3.017-1.207l-3.175 3.334a1.75 1.75 0 1 0 2.535 2.413l.157-.165V22.5a1.75 1.75 0 1 0 3.5 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKeycap10Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
