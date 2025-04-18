import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatIndentDecreaseRoundedIcon],svg[material-symbols-light-format-indent-decrease-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20q-.213 0-.356-.144T4 19.499t.144-.356T4.5 19h15q.213 0 .356.144t.144.357t-.144.356T19.5 20zm8-3.75q-.213 0-.356-.144T12 15.749t.144-.356t.356-.143h7q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-3.75q-.213 0-.356-.144T12 11.999t.144-.356t.356-.143h7q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-3.75q-.213 0-.356-.144T12 8.249t.144-.356t.356-.143h7q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 5q-.213 0-.356-.144T4 4.499t.144-.356T4.5 4h15q.213 0 .356.144t.144.357t-.144.356T19.5 5zm1.612 9.112l-1.82-1.82q-.13-.124-.13-.289t.13-.295l1.82-1.82q.192-.192.444-.095t.252.369v3.677q0 .271-.252.368t-.445-.095"></svg:path>`,
})
export class MaterialSymbolsLightFormatIndentDecreaseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
