import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdSwitchFilledToSwitchOffFilledTransitionIcon],svg[line-md-switch-filled-to-switch-off-filled-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdSwitchFilledToSwitchOffFilledTransition0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M12 7h5c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5h-10c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"></svg:path><svg:circle cx="17" cy="12" r="3" fill="#000" stroke="none"><svg:animate fill="freeze" attributeName="cx" dur="0.2s" values="17;7"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdSwitchFilledToSwitchOffFilledTransition0)"></svg:rect>`,
})
export class LineMdSwitchFilledToSwitchOffFilledTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
