import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWowIcon],svg[arcticons-wow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.935 19.266l-2.359 9.588l-2.358-9.588l-2.359 9.588L9.5 19.266" class="b"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.866 25.618c0 1.798 1.415 3.236 3.066 3.236c1.77 0 3.185-1.438 3.185-3.236v-3.236c0-1.798-1.416-3.236-3.185-3.236s-3.066 1.438-3.066 3.236z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.5 19.266l-2.359 9.588l-2.359-9.588l-2.358 9.588l-2.359-9.588" class="b"></svg:path>`,
})
export class ArcticonsWowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
