import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFriendlyIcon],svg[lineicons-friendly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:circle cx="20" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M48.2 31.8c-1.2 0-2.3 1-2.3 2.3C46 41.2 40.2 47 33.1 47c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c9.6 0 17.4-7.8 17.4-17.4c0-1.3-1-2.4-2.3-2.4"></svg:path>`,
})
export class LineiconsFriendlyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
