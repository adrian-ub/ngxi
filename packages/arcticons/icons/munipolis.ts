import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMunipolisIcon],svg[arcticons-munipolis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.997 45.289C10.388 43.793 2.5 34.714 2.5 24C2.5 12.126 12.126 2.5 24 2.5S45.5 12.126 45.5 24c0 10.714-7.888 19.793-18.497 21.289"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.994 35.912A12.286 12.286 0 0 1 11.714 24c0-6.785 5.5-12.286 12.286-12.286h0c6.786 0 12.286 5.5 12.286 12.286h0a12.286 12.286 0 0 1-9.28 11.912"></svg:path><svg:circle cx="24" cy="24" r="3.071" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 27.071V45.5"></svg:path>`,
})
export class ArcticonsMunipolisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
