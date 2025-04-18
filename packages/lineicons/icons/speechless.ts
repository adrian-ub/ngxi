import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpeechlessIcon],svg[lineicons-speechless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="22.7" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.7" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:path fill="currentColor" d="M43.7 43H20.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3"></svg:path>`,
})
export class LineiconsSpeechlessIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
