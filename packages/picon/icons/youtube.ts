import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconYoutubeIcon],svg[picon-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5L3 2v3M0 4c0-3 0-3 4-3s4 0 4 2.5S8 6 4 6S0 6 0 3.5"></svg:path>`,
})
export class PiconYoutubeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
