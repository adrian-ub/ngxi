import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7GamecontrollerAltFillIcon],svg[f7-gamecontroller-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 14.198c6.125-.045 14.544-7.926 19.804-1.462c5.26 6.463 7.198 23.35 3.813 30.747C50.419 46.1 42.91 46.1 38.27 36.54H17.729C13.09 46.1 5.581 46.1 4.383 43.483C.998 36.086 3.29 18.765 8.196 12.736c4.907-6.03 13.83 1.418 19.804 1.462M17 22v-2.5a1.5 1.5 0 0 0-3 0V22h-2.5a1.5 1.5 0 0 0 0 3H14v2.5a1.5 1.5 0 0 0 3 0V25h2.5a1.5 1.5 0 0 0 0-3zm23 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class F7GamecontrollerAltFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
