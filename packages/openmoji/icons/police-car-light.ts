import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPoliceCarLightIcon],svg[openmoji-police-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M21.4 51V36a14.96 14.96 0 0 1 14.9-15a15.09 15.09 0 0 1 14.9 15v15"></svg:path><svg:path fill="#d0cfce" d="M21.4 51h30a4.95 4.95 0 0 1 5 5a4.95 4.95 0 0 1-5 5h-30a4.95 4.95 0 0 1-5-5a4.95 4.95 0 0 1 5-5"></svg:path><svg:path fill="#d22f27" d="M51.4 36a14.94 14.94 0 0 0-14.8-15a14.7 14.7 0 0 0-4.2.6c9.4 3.8 10.3 23.2 10.4 29.4h8.7V36Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.8 23.5l-4.7-4.7m41 4.7l4.7-4.7M36.4 14V8m-15 43V36a14.96 14.96 0 0 1 14.9-15h0a15.09 15.09 0 0 1 14.9 15v15m-30.1 0h30.5a4.8 4.8 0 0 1 4.8 4.8h0a4.8 4.8 0 0 1-4.8 4.8H21.1a4.8 4.8 0 0 1-4.8-4.8h0a4.935 4.935 0 0 1 4.8-4.8"></svg:path>`,
})
export class OpenmojiPoliceCarLightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
