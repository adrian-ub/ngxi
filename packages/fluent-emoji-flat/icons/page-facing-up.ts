import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPageFacingUpIcon],svg[fluent-emoji-flat-page-facing-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M20.343 2.293A1 1 0 0 0 19.636 2H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9.364a1 1 0 0 0-.293-.707z"></svg:path><svg:path fill="#F3EEF8" d="M19.682 3H7a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.453z"></svg:path><svg:path fill="#998EA4" d="M9.5 12h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1m0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM9 18.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="#CDC4D6" d="M26 9.453h-4.61a1.707 1.707 0 0 1-1.708-1.707V3z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPageFacingUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
