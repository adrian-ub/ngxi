import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGradingRoundedIcon],svg[material-symbols-light-grading-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.944 18.598l2.994-2.994q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.353L16.53 19.43q-.243.242-.566.242t-.565-.242l-1.233-1.233q-.14-.14-.13-.344t.15-.344t.347-.14t.341.14zM4.5 20q-.213 0-.356-.144T4 19.499t.144-.356T4.5 19h7q.213 0 .356.144t.144.357t-.144.356T11.5 20zm0-3.75q-.213 0-.356-.144T4 15.749t.144-.356t.356-.143h7q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-3.75q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-3.75q-.213 0-.356-.144T4 8.249t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 5q-.213 0-.356-.144T4 4.499t.144-.356T4.5 4h15q.213 0 .356.144t.144.357t-.144.356T19.5 5z"></svg:path>`,
})
export class MaterialSymbolsLightGradingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
