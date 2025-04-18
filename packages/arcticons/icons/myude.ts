import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyudeIcon],svg[arcticons-myude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4m-5.458-8.068H39m-5.958-11.916H39m-5.958 5.958h3.884m-3.884-5.958v11.916"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.194 34.432V22.516h2.681a5.213 5.213 0 0 1 5.213 5.213v1.49a5.213 5.213 0 0 1-5.213 5.213zm0-18.099v2.255a1.67 1.67 0 0 1-1.67 1.67h0a1.66 1.66 0 0 1-1.181-.49"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.194 13.577v2.756a1.67 1.67 0 0 1-1.67 1.67h0a1.67 1.67 0 0 1-1.67-1.67v-2.756M9 15.238c0-.922.748-1.67 1.67-1.67h0c.923 0 1.67.748 1.67 1.67v2.673M9 13.568v4.343m3.34-2.673c0-.922.748-1.67 1.67-1.67h0c.923 0 1.67.748 1.67 1.67v2.673M9 22.516v7.969a3.947 3.947 0 1 0 7.894 0v-7.97"></svg:path>`,
})
export class ArcticonsMyudeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
