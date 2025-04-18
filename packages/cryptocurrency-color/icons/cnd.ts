import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorCndIcon],svg[cryptocurrency-color-cnd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#383939"></svg:circle><svg:path fill="#fff" d="m19.473 11.479l2.667-.611l1.033-1.701l-1.02-1.673l-1.306-.902L18.164 6l-1.655.933l-2.648-.472l-3.636 2.519l-.283 2.942l-1.543.644l.178 2.729l-1.077.858l1.076 3.072l.162.322l1.138 3.163l2.339.828l1.734 1.764l1.994.698l.902-.26l1.431-.165l2.098-.601l3.126-1.765l-.818-3.232l-1.574-.62l-.784.897l-2.205.542l-3.207-.508l-1.035-1.197l.36-1.171l-1.516-2.399l1.275-1.556l.136-2.645l1.826-1.048l1.252-.5l1.7.307z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorCndIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
