import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiremoteIcon],svg[arcticons-miremote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="7.981" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.816" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="9.185" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.184" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="38.816" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMiremoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
