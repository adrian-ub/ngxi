import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleFilledToCircleFilledTransitionIcon],svg[line-md-confirm-circle-filled-to-circle-filled-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdConfirmCircleFilledToCircleFilledTransition0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke="#000" stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdConfirmCircleFilledToCircleFilledTransition0)"></svg:rect>`,
})
export class LineMdConfirmCircleFilledToCircleFilledTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
