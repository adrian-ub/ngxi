import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMortalKombatIcon],svg[arcticons-mortal-kombat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.1 37.3l1.7-1.6v-23L6.9 11h5.5l5.4 15.6L23 11h5.4L27 12.6v23l1.7 1.7H21l1.8-1.7V23.5l-5 13.9l-5.1-13.9v12.2l1.7 1.7H7.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27 23.334L34.8 12l-1-1h7.3l-1.9 1l-7.4 11.1l8.9 14.3h-4.6l-6.5-11.3l-2.6 3.467"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMortalKombatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
