import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBankSolidIcon],svg[streamline-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .066a1.2 1.2 0 0 0-.634.18l-5.91 3.87H.455c-.42.277-.547.754-.385 1.161c.156.392.55.657 1.02.657h11.82c.47 0 .864-.265 1.02-.657c.162-.407.034-.884-.385-1.16l-.001-.001l-5.91-3.87A1.2 1.2 0 0 0 7 .066M0 11.877c0-.6.572-.889 1-.889h.055l-.003-.054V7.723a.5.5 0 0 1 .5-.5h1.664a.5.5 0 0 1 .5.5v3.211l-.003.054h1.958l-.003-.054V7.723a.5.5 0 0 1 .5-.5h1.664a.5.5 0 0 1 .5.5v3.211l-.003.054h1.958l-.003-.054V7.723a.5.5 0 0 1 .5-.5h1.664a.5.5 0 0 1 .5.5v3.211l-.003.054H13c.428 0 1 .289 1 .89v1.167c0 .6-.572.889-1 .889H1c-.428 0-1-.289-1-.89z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBankSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
