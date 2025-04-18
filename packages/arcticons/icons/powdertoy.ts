import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPowdertoyIcon],svg[arcticons-powdertoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.996 42.415H6.004L24.26 26.497Z"></svg:path><svg:circle cx="24.259" cy="10.701" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.259" cy="15.066" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.259" cy="19.431" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.922" cy="25.816" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.294" cy="26.736" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.259" cy="23.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.259" cy="6.335" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.14" cy="28.578" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.489" cy="28.578" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsPowdertoyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
