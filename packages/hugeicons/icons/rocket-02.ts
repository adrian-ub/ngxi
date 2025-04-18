import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRocket02Icon],svg[hugeicons-rocket-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.667 7.714v-1.3c0-1.466.611-2.728 1.512-3.793c.35-.414.526-.621.821-.621s.47.207.821.621c.9 1.065 1.512 2.327 1.512 3.792v1.301c0 1.072 0 1.376.648 1.845c.518.333 1.019.655 1.019 1.3c0 .784-.333 1.141-1.064 1.141H9.064C8.334 12 8 11.643 8 10.86c0-.646.501-.968 1.02-1.301c.647-.469.647-.773.647-1.845M19.5 22c1.38 0 2.5-1.194 2.5-2.667s-1.12-2.666-2.5-2.666C19.5 15.194 18.38 14 17 14M4.5 22C3.12 22 2 20.806 2 19.333s1.12-2.666 2.5-2.666C4.5 15.194 5.62 14 7 14m3 1v5m4-5v2" color="currentColor"></svg:path>`,
})
export class HugeiconsRocket02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
