import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsKeyboardLineIcon],svg[majesticons-keyboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14h4m8 2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2m-8-6h.01M18 10h.01M10 10h.01M6 10h.01M6 14h.01M18 14h.01"></svg:path>`,
})
export class MajesticonsKeyboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
