import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircleIcon],svg[pepicons-pop-clipboard-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path d="M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M15.567 11.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334l-1.515-1.176a1 1 0 0 1 1.226-1.58l1.097.851l1.467-2.128a1 1 0 0 1 1.39-.256" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
