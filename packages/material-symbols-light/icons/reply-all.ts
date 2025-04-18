import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReplyAllIcon],svg[material-symbols-light-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.308 16.308L3 11l5.308-5.308l.713.708l-4.6 4.6l4.6 4.6zM20 18v-3q0-1.442-1.029-2.471T16.5 11.5H9.037l4.1 4.1l-.714.708L7.116 11l5.307-5.308l.714.708l-4.1 4.1H16.5q1.864 0 3.182 1.318T21 15v3z"></svg:path>`,
})
export class MaterialSymbolsLightReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
