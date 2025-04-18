import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyKeyboardIcon],svg[arcticons-fossify-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.673 11.026h34.654A2.17 2.17 0 0 1 43.5 13.2v21.598a2.17 2.17 0 0 1-2.173 2.175H6.673A2.17 2.17 0 0 1 4.5 34.8V13.201a2.17 2.17 0 0 1 2.173-2.175m10.521 19.399h13.612"></svg:path><svg:circle cx="11.011" cy="17.492" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.505" cy="17.492" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="17.492" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.495" cy="17.492" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.989" cy="17.492" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.011" cy="23.97" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.505" cy="23.97" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="23.97" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.495" cy="23.97" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.989" cy="23.97" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsFossifyKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
