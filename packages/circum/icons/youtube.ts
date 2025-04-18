import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumYoutubeIcon],svg[circum-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.437 19.937H4.562a2.5 2.5 0 0 1-2.5-2.5V6.563a2.5 2.5 0 0 1 2.5-2.5h14.875a2.5 2.5 0 0 1 2.5 2.5v10.874a2.5 2.5 0 0 1-2.5 2.5M4.562 5.063a1.5 1.5 0 0 0-1.5 1.5v10.874a1.5 1.5 0 0 0 1.5 1.5h14.875a1.5 1.5 0 0 0 1.5-1.5V6.563a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M14.568 11.149L10.6 8.432a1.032 1.032 0 0 0-1.614.851v5.434a1.032 1.032 0 0 0 1.614.851l3.972-2.717a1.03 1.03 0 0 0-.004-1.702"></svg:path>`,
})
export class CircumYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
