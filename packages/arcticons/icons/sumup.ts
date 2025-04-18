import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSumupIcon],svg[arcticons-sumup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.23 28.604c-5.535-5.514-5.535-14.454 0-19.968s14.51-5.515 20.046 0zm-4.506 10.76c5.535 5.515 14.51 5.515 20.046 0s5.535-14.454 0-19.968z"></svg:path>`,
})
export class ArcticonsSumupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
