import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSbbMywayIcon],svg[arcticons-sbb-myway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.87 6.041l2.865 2.868l-2.867 2.867m-5.739 0L18.265 8.91l2.867-2.868m-2.867 2.867h11.47M24 6.041v5.736"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.421 15.318h39.158m-14.992 7.71a4.599 4.599 0 0 0-9.198 0c0 3.374 4.599 9.513 4.599 9.513s4.599-6.139 4.599-9.513"></svg:path><svg:circle cx="23.988" cy="23.028" r="2.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="36.03" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.236" cy="38.64" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.472" cy="36.183" r=".75" fill="currentColor"></svg:circle><svg:circle cx="12.709" cy="33.726" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.764" cy="33.638" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.528" cy="36.03" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.291" cy="38.423" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsSbbMywayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
