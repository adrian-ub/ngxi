import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiDuckIcon],svg[arcticons-emoji-duck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.14 30.723c4.619 3.779 0 4.199 0 4.199c-11.335 1.26-14.274-10.917-14.274-10.917"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.918 36.184c7.147 1.925 19.392 2.19 16.78-.422c-2.94-2.94-3.359-4.2-3.779-6.718c-.42-2.52-3.778-7.558-9.656-8.817s0-9.237-4.199-13.016s-9.237-.42-9.237 1.68s-2.099 3.358-2.099 3.358c-.84.42-6.298 2.52.84 2.52s6.717 1.679 4.618 2.938c0 0-7.155 3.036-5.197 9.565c1.987 6.62 11.915 8.91 11.915 8.91s-.42.839 0 1.679s-.242 1.082-1.082 2.341s-2.697.178-4.376.598c-1.288.322-2.1 1.679.42 1.679h7.137s2.519.42-.42-2.52c0 0 .42-.839.42-1.259s.91-.84.665-1.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.306 42.454h5.68s2.006.334-.333-2.005c0 0 .334-.669.334-1.003s.724-.668.529-1.337"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.316 37.441s-.334.668 0 1.337s.334.334-.334 1.337c-.27.405-.812.584-1.559.685"></svg:path>`,
})
export class ArcticonsEmojiDuckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
