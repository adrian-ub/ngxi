import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBooksIcon],svg[openmoji-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M61.217 21.641L37.91 15.04a1 1 0 0 0-.554.002l-22.594 6.626a1 1 0 0 0-.137.072a5.383 5.383 0 0 0-1.834 9.543a5.364 5.364 0 0 0 .066 8.697a5.378 5.378 0 0 0 1.486 9.502l23.014 6.713a1 1 0 0 0 .555.002l23.306-6.652a1 1 0 0 0 .725-.961v-25.98a1 1 0 0 0-.727-.962"></svg:path><svg:path fill="#92d3f5" d="m37.638 15.976l23.306 6.603l-23.306 6.652l-22.594-6.628z"></svg:path><svg:path fill="#61b2e4" d="m15.082 24.728l21.994 6.446a2 2 0 0 0 1.11.004l23.296-6.765a.61.61 0 0 0 .442-.58l.019-1.25l-24.305 6.672l-22.558-6.613a4.4 4.4 0 0 0-.455 8.482l23.014 6.713l24.211-6.91l.04-1.243a.626.626 0 0 0-.797-.621l-23.449 6.692l-22.422-6.54a2.4 2.4 0 0 1-.14-4.487"></svg:path><svg:path fill="#d22f27" d="m15.082 33.41l21.994 6.446a2 2 0 0 0 1.11.004l23.296-6.766a.61.61 0 0 0 .442-.579l.019-1.25l-24.305 6.672l-22.558-6.613a4.4 4.4 0 0 0-.455 8.482l23.014 6.713l24.211-6.91l.04-1.243a.625.625 0 0 0-.797-.621l-23.449 6.692l-22.422-6.54a2.4 2.4 0 0 1-.14-4.487"></svg:path><svg:path fill="#5c9e31" d="M15.082 42.155L37.076 48.6a2 2 0 0 0 1.11.004l23.296-6.765a.61.61 0 0 0 .442-.58l.019-1.25l-24.305 6.672L15.08 40.07a4.4 4.4 0 0 0-.455 8.481l23.014 6.713l24.211-6.91l.04-1.242a.625.625 0 0 0-.797-.622l-23.449 6.693l-22.422-6.54a2.4 2.4 0 0 1-.14-4.488"></svg:path><svg:path fill="#61b2e4" d="m44.32 17.794l-5.726-1.622L16 22.799l5.81 1.705z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m37.638 16l23.306 6.603l-23.306 6.652l-22.594-6.628z"></svg:path><svg:path d="M15.08 22.643a4.4 4.4 0 0 0-.455 8.48l23.014 6.714l23.305-6.652"></svg:path><svg:path d="M15.08 31.294a4.4 4.4 0 0 0-.455 8.481l23.014 6.714l23.305-6.652"></svg:path><svg:path d="M15.08 40.04a4.4 4.4 0 0 0-.455 8.481l23.014 6.713l23.305-6.651"></svg:path></svg:g>`,
})
export class OpenmojiBooksIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
