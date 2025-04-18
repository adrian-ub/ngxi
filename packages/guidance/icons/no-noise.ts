import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoNoiseIcon],svg[guidance-no-noise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17 6.5a5.5 5.5 0 0 1 .5 10.978M17 9.5a2.5 2.5 0 0 1 0 5m-2.5 0v-12h-.25l-.523.548a16 16 0 0 1-6.483 4.12l-.06.015M14.5 18v3.5h-.25l-.523-.548A16 16 0 0 0 2.154 16H1.5V8h.654Q3.34 8 4.5 7.827M.5.5l6.683 6.683M23.5 23.5L7.183 7.183"></svg:path>`,
})
export class GuidanceNoNoiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
