import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPokemmoIcon],svg[arcticons-pokemmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.99" cy="23.99" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.83 27.75C4.6 37.83 13.4 45.49 23.99 45.49s19.39-7.66 21.16-17.74h-8.71c-1.61 5.35-6.58 9.24-12.45 9.24s-10.84-3.89-12.45-9.24zm-.01-7.5C4.59 10.16 13.4 2.49 23.99 2.49s19.4 7.67 21.17 17.76h-8.71c-1.61-5.36-6.58-9.26-12.46-9.26s-10.85 3.9-12.46 9.26z"></svg:path>`,
})
export class ArcticonsPokemmoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
