import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlueBookIcon],svg[openmoji-blue-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M18 12h42v47.5H18z"></svg:path><svg:path fill="#61b2e4" d="M12.5 12h6.493l-1.25 47.5h-2.737c-1.66 0-2.506-1.346-2.506-3.006z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 13v46m44.909-4.185A1.99 1.99 0 0 0 64 53.047V9.083C64 7.933 63.067 7 61.917 7H16.459c-1.597 0-3.089.8-3.973 2.13h0a1.889 1.889 0 0 0 1.573 2.935h3.808L20 12.047h39.917v48H14.058a1.89 1.89 0 0 1-1.891-1.85V10.575"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.533 27.219v7h3m-8.825 0a2.5 2.5 0 0 1-2.5-2.5v-2a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-2.5 2.5"></svg:path><svg:circle cx="45.533" cy="34.219" r="1"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m28.416 27.29l-1.518 7h-1.361l-1.537-7m25.563 5.531a1.93 1.93 0 0 0 1.934 1.398h0a1.763 1.763 0 1 0 0-3.5a1.763 1.763 0 1 0 0-3.5h0a1.93 1.93 0 0 0-1.934 1.397"></svg:path>`,
})
export class OpenmojiBlueBookIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
