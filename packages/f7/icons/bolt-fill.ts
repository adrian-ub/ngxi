import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BoltFillIcon],svg[f7-bolt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.176 32.5h13.242l-6.984 18.984c-.915 2.414 1.593 3.703 3.187 1.735l21.281-26.625c.399-.492.61-.961.61-1.5c0-.89-.68-1.594-1.664-1.594H29.582L36.59 4.516c.89-2.414-1.594-3.703-3.188-1.711l-21.28 26.601c-.4.516-.634.985-.634 1.5c0 .914.703 1.594 1.688 1.594"></svg:path>`,
})
export class F7BoltFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
