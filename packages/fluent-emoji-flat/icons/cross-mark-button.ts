import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCrossMarkButtonIcon],svg[fluent-emoji-flat-cross-mark-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00D26A" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M21.564 8.314a1.5 1.5 0 0 1 2.122 2.122L18.12 16l5.565 5.564a1.5 1.5 0 0 1-2.122 2.122L16 18.12l-5.564 5.565a1.5 1.5 0 0 1-2.122-2.122L13.88 16l-5.565-5.564a1.5 1.5 0 0 1 2.122-2.122L16 13.88z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCrossMarkButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
