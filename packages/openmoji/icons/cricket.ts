import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCricketIcon],svg[openmoji-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5C9E31" d="M58 46h3s-5 10-23 9c0 0-7 0-15-8c0 0 1 7-4 5s-6-5-4-12l25 4"></svg:path><svg:path fill="#B1CC33" d="m39 50l17-15l-2 11z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m8 36l6 4l-3-6m16.144 17.252L24 59h-3m11.85-4.877L31 59h4"></svg:path><svg:path d="M58 46h3s-5 10-23 9c0 0-7 0-15-8c0 0 1 7-4 5s-6-5-4-12l25 4"></svg:path><svg:path d="M56 59h-4l5-25l-18 15"></svg:path></svg:g>`,
})
export class OpenmojiCricketIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
