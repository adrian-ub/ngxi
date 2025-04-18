import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReplyIcon],svg[material-symbols-light-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-3q0-1.442-1.029-2.471T15.5 11.5H5.921l4.1 4.1l-.713.708L4 11l5.308-5.308l.713.708l-4.1 4.1H15.5q1.864 0 3.182 1.318T20 15v3z"></svg:path>`,
})
export class MaterialSymbolsLightReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
