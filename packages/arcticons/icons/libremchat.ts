import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibremchatIcon],svg[arcticons-libremchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.08 27.3h9.75a9.22 9.22 0 0 0 0-18.44H13.51a9.22 9.22 0 0 0-1.38 18.33v4.38Zm9.2-10.58a1.6 1.6 0 0 1 0 3.19a1.2 1.2 0 0 1-.27 0a1.6 1.6 0 0 1 .27-3.19m-7.49 1.58a1.6 1.6 0 1 1 1.59 1.61a1.6 1.6 0 0 1-1.59-1.61m-4.3-1.58a1.6 1.6 0 0 1 0 3.19a1 1 0 0 1-.26 0a1.6 1.6 0 0 1 .26-3.19"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.79 30.17a8.77 8.77 0 0 0 7.56 4.38h9.86l4.39 3.73v-3.84a8.76 8.76 0 0 0 7.49-6.59c1.17-4.7-2.14-10-7-10.63"></svg:path>`,
})
export class ArcticonsLibremchatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
