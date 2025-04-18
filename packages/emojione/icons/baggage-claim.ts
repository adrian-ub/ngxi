import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBaggageClaimIcon],svg[emojione-baggage-claim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:g fill="#fff"><svg:circle cx="14.5" cy="48" r="2"></svg:circle><svg:circle cx="21.5" cy="48" r="2"></svg:circle><svg:circle cx="28.5" cy="48" r="2"></svg:circle><svg:circle cx="35.5" cy="48" r="2"></svg:circle><svg:circle cx="42.5" cy="48" r="2"></svg:circle><svg:circle cx="49.5" cy="48" r="2"></svg:circle><svg:path d="M41 19h-2v-3.9c0-.6-.4-1-1-1H26c-.6 0-1 .5-1 1V19h-2v-3.9c0-1.7 1.3-3.1 3-3.1h12c1.7 0 3 1.4 3 3.1zm9 0h-3.5v24H50c1.1 0 2-.9 2-2V21c0-1.1-.9-2-2-2m-30.5 0h25v24h-25zm-2 0H14c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h3.5z"></svg:path></svg:g>`,
})
export class EmojioneBaggageClaimIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
