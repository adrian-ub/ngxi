import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSdscannerIcon],svg[arcticons-sdscanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22.8" cy="17.4" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.4 24.7L7.2 42.4M37.7 4.8H18v32.7h24.5V9.6Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39 12.9H21.37a1.13 1.13 0 0 0-1.07 1.19h0v19.68A1.13 1.13 0 0 0 21.37 35H39a1.13 1.13 0 0 0 1-1.23V14.09a1.13 1.13 0 0 0-1-1.19"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.7 17.4v15.5h13.8V17.4Zm2.76 2.6v10.3M29.22 20v10.3M31.98 20v10.3M34.74 20v10.3m-10.3-19.19A7.18 7.18 0 0 1 28.36 14m-7.21 9.65a7.18 7.18 0 0 1-3.92-2.93"></svg:path>`,
})
export class ArcticonsSdscannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
