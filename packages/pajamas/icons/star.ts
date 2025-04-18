import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasStarIcon],svg[pajamas-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.454 1.694a.591.591 0 0 1 1.092 0l1.585 3.81a.25.25 0 0 0 .21.154l4.114.33a.591.591 0 0 1 .338 1.038L11.658 9.71a.25.25 0 0 0-.08.247l.957 4.015a.591.591 0 0 1-.883.641l-3.522-2.15a.25.25 0 0 0-.26 0l-3.522 2.15a.591.591 0 0 1-.883-.641l.957-4.015a.25.25 0 0 0-.08-.247L1.207 7.026a.591.591 0 0 1 .338-1.038l4.113-.33a.25.25 0 0 0 .211-.153z"></svg:path>`,
})
export class PajamasStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
