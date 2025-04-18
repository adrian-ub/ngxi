import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPlacardIcon],svg[fluent-emoji-flat-placard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3AD61" d="M13 5a3 3 0 1 1 6 0v22a3 3 0 1 1-6 0z"></svg:path><svg:path fill="#D3883E" d="M13 18h6v2h-6z"></svg:path><svg:path fill="#CDC4D6" d="M5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 16.5z"></svg:path><svg:path fill="#998EA4" d="M11 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPlacardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
