import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForMongoliaIcon],svg[emojione-flag-for-mongolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c94747" d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32m60 0c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32"></svg:path><svg:path fill="#2872a0" d="M22 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7z"></svg:path><svg:g transform="scale(5)"><svg:circle cx="2.6" cy="4.8" r=".7" fill="#f9cf02"></svg:circle><svg:circle cx="2.6" cy="4.4" r=".8" fill="#c94747"></svg:circle><svg:g fill="#f9cf02"><svg:circle cx="2.6" cy="4.6" r=".5"></svg:circle><svg:path d="M2.3 3.6q0 .3.3.3c.2 0 .4-.1.4-.3c0-.1-.1-.1-.1-.2v-.2v.3s0 .1-.1.1s-.1 0-.1-.1s.1-.1.1-.2s0-.1-.1-.2c0-.1-.1-.1-.1-.2c-.1 0 0 .2 0 .2s-.1.1-.1.2v.2s0 .1-.1.1s-.1 0-.1-.1v-.1c0-.1-.1-.1 0-.2c-.1.1 0 .1 0 .2zm-1.1 2v3.1h.6V5.6zm2.2 0v3.1h.7V5.6zM2 6.1v.3h1.3v-.3zm0 1.8v.3h1.3v-.3zm0-2.3h1.3l-.7.4zm0 2.7h1.3l-.7.4z"></svg:path></svg:g></svg:g><svg:circle cx="13.2" cy="35.8" r="3.4" fill="#f9cf02"></svg:circle><svg:g fill="#c94747"><svg:path d="M13.2 39.5c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6m0-6.9c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3"></svg:path><svg:path d="M13.2 39.5c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5v-.4c1.1 0 1.9.9 1.9 1.9c0 1.1-.9 1.9-1.9 1.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"></svg:path><svg:circle cx="13.2" cy="34.1" r=".7"></svg:circle><svg:circle cx="13.2" cy="37.5" r=".6"></svg:circle></svg:g>`,
})
export class EmojioneFlagForMongoliaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
