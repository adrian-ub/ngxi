import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBaggageClaimIcon],svg[fluent-emoji-flat-baggage-claim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M13.261 9a2.75 2.75 0 1 1 5.478 0h2.011a.25.25 0 0 1 .25.25v11.5a.25.25 0 0 1-.25.25h-9.5a.25.25 0 0 1-.25-.25V9.25a.25.25 0 0 1 .25-.25zm1.007 0h3.464q.018-.123.018-.25a1.75 1.75 0 1 0-3.482.25M8 9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.75a.25.25 0 0 0 .25-.25V9.25A.25.25 0 0 0 9.75 9zm14 11.75c0 .138.112.25.25.25H24a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-1.75a.25.25 0 0 0-.25.25zm4 2.75a.5.5 0 0 0-.5-.5h-19a.5.5 0 0 0 0 1H9a1 1 0 1 0 2 0h2a1 1 0 0 0 2 0h2a1 1 0 0 0 2 0h2a1 1 0 0 0 2 0h2.5a.5.5 0 0 0 .5-.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBaggageClaimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
