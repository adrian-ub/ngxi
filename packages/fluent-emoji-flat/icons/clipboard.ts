import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatClipboardIcon],svg[fluent-emoji-flat-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E19747" d="M5 4.5A1.5 1.5 0 0 1 6.5 3h19A1.5 1.5 0 0 1 27 4.5v24a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 5 28.5z"></svg:path><svg:path fill="#F3EEF8" d="M25 6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h10.586c.147 0 .29-.032.421-.093l.321-.783l.632-4.086l4.457-.783l.49-.247a1 1 0 0 0 .093-.422z"></svg:path><svg:path fill="#CDC4D6" d="M24.91 22H20a1 1 0 0 0-1 1v4.91a1 1 0 0 0 .293-.203l5.414-5.414A1 1 0 0 0 24.91 22"></svg:path><svg:path fill="#9B9B9B" d="M18 4a2 2 0 1 0-4 0h-1a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6a2 2 0 0 0-2-2zm-1 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-8 8.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM9 21.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatClipboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
