import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRocket3StartLineIcon],svg[majesticons-rocket-3-start-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#majesticonsRocket3StartLine0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.9 16.97l7.436-7.436a8 8 0 0 0 2.145-3.89l.318-1.401l-1.402.317a8 8 0 0 0-3.89 2.146L9.192 12.02m.707 4.95l2.122 3.535c1.178-1.178 2.828-2.828 0-5.657zm0 0l-2.828-2.829m0 0L3.536 12.02c1.178-1.179 2.828-2.829 5.656 0m-2.12 2.121l2.12-2.121M4.95 16.263s-1.703 2.54-.707 3.536c.995.996 3.535-.707 3.535-.707"></svg:path></svg:g><svg:defs><svg:clippath id="majesticonsRocket3StartLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MajesticonsRocket3StartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
