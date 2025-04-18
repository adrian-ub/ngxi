import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpacityRoundedIcon],svg[material-symbols-opacity-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-3.325 0-5.663-2.3T4 13.1q0-1.625.625-3.037T6.35 7.55l4.6-4.525q.225-.2.5-.312T12 2.6t.55.113t.5.312l4.6 4.525q1.1 1.1 1.725 2.513T20 13.1q0 3.3-2.337 5.6T12 21m-5.95-7H17.9q.3-1.8-.337-3.075T16.25 9L12 4.8L7.75 9q-.675.65-1.325 1.925T6.05 14"></svg:path>`,
})
export class MaterialSymbolsOpacityRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
