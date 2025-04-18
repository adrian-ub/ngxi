import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatConfusedFaceIcon],svg[fluent-emoji-flat-confused-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M14 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M12.464 22.496a5.346 5.346 0 0 1 7.38-1.652a1 1 0 0 0 1.072-1.688c-3.427-2.177-7.965-1.157-10.14 2.268a1 1 0 1 0 1.688 1.072"></svg:path></svg:g>`,
})
export class FluentEmojiFlatConfusedFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
