import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackVgIcon],svg[flagpack-vg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:clippath id="flagpackVg0"><svg:path fill="#fff" d="M0 0h18v14H0z"></svg:path></svg:clippath><svg:g fill="none"><svg:path fill="#2E42A5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:g clip-path="url(#flagpackVg0)"><svg:path fill="#2E42A5" d="M0 0h18v14H0z"></svg:path><svg:path fill="#F7FCFF" d="m-2.004 13l3.96 1.737L18.09 1.889l2.09-2.582l-4.236-.58l-6.58 5.536l-5.297 3.73z"></svg:path><svg:path fill="#F50100" d="m-1.462 14.217l2.018 1.008L19.429-.933h-2.833z"></svg:path><svg:path fill="#F7FCFF" d="m20.004 13l-3.96 1.737L-.09 1.889L-2.18-.693l4.236-.58l6.58 5.536l5.297 3.73z"></svg:path><svg:path fill="#F50100" d="m19.87 13.873l-2.019 1.009l-8.036-6.918l-2.383-.773L-2.38-.684H.453l9.807 7.688l2.605.927z"></svg:path><svg:path fill="#F50100" fill-rule="evenodd" d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985z" clip-rule="evenodd"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M6.485 0h5v4.5H18v5h-6.515L11.5 14h-5l-.015-4.5H0v-5h6.485zm1.5 6H0v2h7.985v6h2V8H18V6H9.985V0h-2z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackVgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
