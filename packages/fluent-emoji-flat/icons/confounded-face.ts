import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatConfoundedFaceIcon],svg[fluent-emoji-flat-confounded-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#402A32" d="M8.106 13.553a1 1 0 0 1 1.341-.448l4 2a1 1 0 0 1 0 1.79l-4 2a1 1 0 1 1-.894-1.79L10.763 16l-2.21-1.106a1 1 0 0 1-.447-1.341m15.789 0a1 1 0 0 0-1.342-.448l-4 2a1 1 0 0 0 0 1.79l4 2a1 1 0 1 0 .894-1.79L21.237 16l2.21-1.106a1 1 0 0 0 .448-1.341m-10.188 6.74a1 1 0 0 0-1.414 0L10 22.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0L13 22.414l2.293 2.293a1 1 0 0 0 1.414 0L19 22.414l2.293 2.293a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L22 22.586l-2.293-2.293a1 1 0 0 0-1.414 0L16 22.586z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatConfoundedFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
