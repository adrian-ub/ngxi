import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiTrapezoidLeftLineHorizontalIcon],svg[gravity-ui-trapezoid-left-line-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiTrapezoidLeftLineHorizontal0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M.75 7.25a.75.75 0 0 0 0 1.5H2v2.234a2.5 2.5 0 0 0 1.97 2.443l7 1.517A2.5 2.5 0 0 0 14 12.5V8.75h1.25a.75.75 0 0 0 0-1.5H14V3.5a2.5 2.5 0 0 0-3.03-2.444l-7 1.517A2.5 2.5 0 0 0 2 5.016V7.25zm2.75 1.5v2.234a1 1 0 0 0 .788.977l7 1.517A1 1 0 0 0 12.5 12.5V8.75zm9-1.5h-9V5.016a1 1 0 0 1 .788-.977l7-1.517A1 1 0 0 1 12.5 3.5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiTrapezoidLeftLineHorizontal0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiTrapezoidLeftLineHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
