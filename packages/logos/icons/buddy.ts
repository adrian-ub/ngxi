import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBuddyIcon],svg[logos-buddy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="logosBuddy0" d="M116.612 3.643C92.293 17.641 35.707 50.383 11.389 64.38C4.389 68.414 0 76.006 0 84.073v121.476c0 8.066 4.389 15.659 11.389 19.692c24.2 13.998 80.904 46.739 105.223 60.738c7.117 4.032 15.777 4.032 22.776 0c24.201-13.999 80.905-46.74 105.223-60.738C251.61 221.208 256 213.615 256 205.549V84.073c0-8.185-4.39-15.659-11.389-19.693c-24.2-13.997-80.904-46.739-105.223-60.737A23.2 23.2 0 0 0 127.955.618a22.7 22.7 0 0 0-11.343 3.025"></svg:path></svg:defs><svg:mask id="logosBuddy1" fill="#fff"><svg:use href="#logosBuddy0"></svg:use></svg:mask><svg:use fill="#00C9FF" href="#logosBuddy0"></svg:use><svg:g mask="url(#logosBuddy1)"><svg:path fill="#1A67FD" d="M66.55 144.811L128 292.859L0 218.716z"></svg:path><svg:path fill="#0DA7FE" d="M66.55 144.811L0 70.431v148.285z"></svg:path><svg:path fill="#00C9FF" d="M66.55 144.811L128-3l128 221.716z"></svg:path><svg:path fill="#05BBFF" d="M66.55 144.811L128-3L0 70.431z"></svg:path><svg:path fill="#1A86FD" d="m128 292.859l128-74.143l-189.45-73.905z"></svg:path><svg:path fill="#05BBFF" d="M256 218.716V70.905L128-3z"></svg:path><svg:path fill="#1A67FD" fill-opacity=".5" d="m155.047 132.355l16.252 16.252l-8.067 8.067l-8.185 8.185l-45.791 45.791l-16.251-16.253l45.79-45.79l-45.79-45.791l16.251-16.252z"></svg:path><svg:path fill="#D6FFFF" d="M171.299 141.252L155.047 125l-62.042 62.043l16.252 16.252z"></svg:path><svg:path fill="#D6FFFF" d="M109.257 79.328L93.123 95.58l62.043 62.043l16.252-16.253c-.12-.118-62.161-62.042-62.161-62.042"></svg:path></svg:g>`,
})
export class LogosBuddyIcon {
  readonly viewBox = input("0 0 256 289")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
