import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosProducthuntIcon],svg[logos-producthunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosProducthunt0" x1="50%" x2="50%" y1="0%" y2="100%"><svg:stop offset="0%" stop-color="#DA552F"></svg:stop><svg:stop offset="100%" stop-color="#D04B25"></svg:stop></svg:lineargradient></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="url(#logosProducthunt0)" d="M128 256c70.694 0 128-57.306 128-128S198.694 0 128 0S0 57.306 0 128s57.306 128 128 128"></svg:path><svg:path fill="#FFF" d="M96 76.8v102.4h19.2v-32h29.056c19.296-.512 34.944-16.16 34.944-35.2c0-19.552-15.648-35.2-34.944-35.2zm48.493 51.2H115.2V96h29.293c8.563 0 15.507 7.168 15.507 16s-6.944 16-15.507 16"></svg:path></svg:g>`,
})
export class LogosProducthuntIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
