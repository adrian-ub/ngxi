import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdSwitchOffToSwitchTransitionIcon],svg[line-md-switch-off-to-switch-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="12" r="3" fill="currentColor"><svg:animate fill="freeze" attributeName="cx" dur="0.2s" values="7;17"></svg:animate></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h5c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5h-10c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"></svg:path>`,
})
export class LineMdSwitchOffToSwitchTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
