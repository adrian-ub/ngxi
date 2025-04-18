import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFunktrainerIcon],svg[arcticons-funktrainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.093 31.892a15.815 15.815 0 0 1 0-27.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.674 29.153a12.652 12.652 0 0 1 0-21.914"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.256 26.414a9.49 9.49 0 0 1 0-16.436"></svg:path><svg:circle cx="24" cy="18.196" r="2.109" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5V20.305M31.908 4.5a15.815 15.815 0 0 1 0 27.392"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.326 7.24a12.652 12.652 0 0 1 0 21.913"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.745 9.978a9.49 9.49 0 0 1 0 16.436"></svg:path>`,
})
export class ArcticonsFunktrainerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
