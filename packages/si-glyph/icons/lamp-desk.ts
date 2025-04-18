import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLampDeskIcon],svg[si-glyph-lamp-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.521 7.989c-.258 0-.497.072-.708.19l-1.541-2.593l.376-.341l-1.579-1.743l-1.007 1.805l1.135 1.254l.358-.325l1.607 2.66a1.5 1.5 0 0 0 .243 1.569l-1.229 3.929a6.6 6.6 0 0 0-2.137-.361c-2.72 0-5.038-.375-5.974 1.916h11.946c-.544-1.33-1.562-.423-2.843-1.116l1.19-3.859c.053.006.104.017.16.017c.21 0 .409-.046.59-.126c.303-.134.548-.37.704-.662c.115-.212.186-.452.186-.711a1.49 1.49 0 0 0-1.477-1.503m-3.388-6.023L8.346-.009L3.113 2.266L7.354 6.95z"></svg:path><svg:path d="M4.473 5.323c.999 1.104 1.882.47 1.882.47L4.177 3.386s-.706.833.296 1.937"></svg:path></svg:g>`,
})
export class SiGlyphLampDeskIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
