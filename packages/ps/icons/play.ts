import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPlayIcon],svg[ps-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 427q4 2 9 2q11 0 15-6l170-192q12-16 0-28L42 11Q34-2 18 5Q5 9 5 24v384q0 15 13 19M48 79l122 137L48 353z"></svg:path>`,
})
export class PsPlayIcon {
  readonly viewBox = input("0 0 224 472")
  readonly width = input("0.48em")
  readonly height = input("1em")
}
