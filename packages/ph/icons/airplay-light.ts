import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAirplayLightIcon],svg[ph-airplay-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132.56 156.1a6 6 0 0 0-9.11 0l-48 56A6 6 0 0 0 80 222h96a6 6 0 0 0 4.56-9.9ZM93.05 210l35-40.78L163 210ZM230 64v112a22 22 0 0 1-22 22h-8a6 6 0 0 1 0-12h8a10 10 0 0 0 10-10V64a10 10 0 0 0-10-10H48a10 10 0 0 0-10 10v112a10 10 0 0 0 10 10h8a6 6 0 0 1 0 12h-8a22 22 0 0 1-22-22V64a22 22 0 0 1 22-22h160a22 22 0 0 1 22 22"></svg:path>`,
})
export class PhAirplayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
