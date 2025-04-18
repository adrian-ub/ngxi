import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosScaledroneIcon],svg[logos-scaledrone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosScaledrone0" x1="75.094%" x2="26.264%" y1="93.381%" y2="8.971%"><svg:stop offset="0%" stop-color="#FFF" stop-opacity="0"></svg:stop><svg:stop offset="47.52%" stop-color="#6466BB"></svg:stop><svg:stop offset="100%" stop-color="#FFF" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs><svg:circle cx="128" cy="128" r="128" fill="url(#logosScaledrone0)" opacity=".5"></svg:circle><svg:path fill="#6466BB" d="M205.6 83.2L238.9 64c-30-52-96.6-69.9-148.6-39.8c-52 30-69.9 96.6-39.8 148.6L17.1 192c30 52 96.6 69.9 148.6 39.8c52.1-30 69.9-96.6 39.9-148.6"></svg:path>`,
})
export class LogosScaledroneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
