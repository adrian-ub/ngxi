import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiPlayIcon],svg[ei-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></svg:path><svg:path fill="currentColor" d="M20 33.7V16.3L35 25zm2-14v10.5l9-5.3z"></svg:path>`,
})
export class EiPlayIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
