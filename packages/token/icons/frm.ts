import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFrmIcon],svg[token-frm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.324 16.24l.794.461l.794-.466v-3.44l11.849-6.592l-1.588-1.07l-10.26 5.522V8.432l8.671-4.363L12.996 3L4.324 7.394z"></svg:path><svg:path fill="currentColor" d="m16.5 8.198l-9 5.082v2.41l9-5.348zM8.558 18.899l-1.588-1.07l9.53-5.882v2.145l-7.942 4.817z"></svg:path><svg:path fill="currentColor" d="m18.882 7.13l.794.508v8.587L11.629 21l-1.588-1.07l8.046-4.775V7.66l.795-.535z"></svg:path>`,
})
export class TokenFrmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
