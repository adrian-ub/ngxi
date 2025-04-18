import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaviIcon],svg[arcticons-mavi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.18 21.3l-2 5.4l-2-5.4m-17.53 2c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v3.3m-4-5.3v5.4m4-3.4c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v3.3"></svg:path><svg:circle cx="36.147" cy="18.9" r=".7" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.147 21.3v5.4m-9.729-2c0 1.1-.9 2-2 2h0c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2m0 3.3v-5.4"></svg:path>`,
})
export class ArcticonsMaviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
