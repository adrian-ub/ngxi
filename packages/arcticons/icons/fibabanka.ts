import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFibabankaIcon],svg[arcticons-fibabanka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.158 23.184L24.809 9.835a1.144 1.144 0 0 0-1.618 0L9.84 23.185a1.144 1.144 0 0 0 0 1.617l13.35 13.35a1.144 1.144 0 0 0 1.618 0l13.349-13.35a1.144 1.144 0 0 0 0-1.618M21.6 26.404l-12.074-2.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 9.53l-2.4 16.874L24 38.5m-2.4-12.096l16.888-2.511"></svg:path>`,
})
export class ArcticonsFibabankaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
