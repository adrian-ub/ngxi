import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndArrowOutlineRoundedIcon],svg[material-symbols-light-line-end-arrow-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.429 16.044q-.404.268-.82.032q-.417-.236-.417-.728V12.5H3.577q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h8.615V8.652q0-.492.417-.728q.416-.236.82.032l5.285 3.367q.378.238.378.675t-.378.679zm-.237-1.04L17.91 12l-4.718-3.004zm0-3.004"></svg:path>`,
})
export class MaterialSymbolsLightLineEndArrowOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
