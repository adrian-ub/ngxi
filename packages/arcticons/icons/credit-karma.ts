import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditKarmaIcon],svg[arcticons-credit-karma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.133 7.636V34.37m0-5.681l12.03-12.03m-8.354 8.354L39.5 34.37m-18.635-3.345a6.47 6.47 0 0 1-5.681 3.342h0A6.703 6.703 0 0 1 8.5 27.683V23.34a6.703 6.703 0 0 1 6.684-6.684h0a6.47 6.47 0 0 1 5.68 3.342"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCreditKarmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
