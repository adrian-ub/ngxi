import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotoaudioIcon],svg[arcticons-motoaudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 34.717h4.333m4.334-21.434H16.5M20.833 24h4.334M29.5 13.283h4.333m4.334 21.434H42.5M5.667 38.5v-29m8.666 29v-29M23 38.5v-29m8.667 29v-29m8.666 29v-29"></svg:path>`,
})
export class ArcticonsMotoaudioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
