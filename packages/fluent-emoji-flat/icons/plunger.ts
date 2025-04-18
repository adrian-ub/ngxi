import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPlungerIcon],svg[fluent-emoji-flat-plunger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FBB8AB" d="M29.414 2.586a2 2 0 0 1 0 2.828L17.328 17.5L14 18l.5-3.328L26.586 2.586a2 2 0 0 1 2.828 0"></svg:path><svg:path fill="#F8312F" d="M14.828 24.95a4.5 4.5 0 0 0 .629-5.578l1.957-1.958l-2.828-2.828l-1.958 1.957a4.5 4.5 0 0 0-5.578.629l-1.525 1.525l-.11-.111a2 2 0 0 0-2.83 2.828l8 8a2 2 0 1 0 2.83-2.828l-.112-.111z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPlungerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
