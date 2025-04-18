import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatStopButtonIcon],svg[fluent-emoji-flat-stop-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M8 9.5A1.5 1.5 0 0 1 9.5 8h13A1.5 1.5 0 0 1 24 9.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 22.5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatStopButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
