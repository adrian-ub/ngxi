import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatZipperMouthFaceIcon],svg[fluent-emoji-flat-zipper-mouth-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M12.5 11.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m11 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="#9B9B9B" d="M8.25 18C7.56 18 7 18.56 7 19.25V22h2.5v.75a1.25 1.25 0 1 0 2.5 0V22h2.5v.75a1.25 1.25 0 1 0 2.5 0V22h2.5v.75a1.25 1.25 0 1 0 2.5 0V22h1.314a2.11 2.11 0 0 0 .196 2.483l2.419 2.789a2.107 2.107 0 0 0 3.077.117l.382-.382c.86-.86.807-2.28-.116-3.076l-2.791-2.418a2.1 2.1 0 0 0-1.981-.424V19.25a1.25 1.25 0 1 0-2.5 0V20h-2.5v-.75a1.25 1.25 0 1 0-2.5 0V20h-2.5v-.75a1.25 1.25 0 1 0-2.5 0V20H9.5v-.75c0-.69-.56-1.25-1.25-1.25m15.896 5.475a.934.934 0 0 1 0-1.315a.936.936 0 0 1 1.316 0a.916.916 0 0 1 0 1.315a.936.936 0 0 1-1.316 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatZipperMouthFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
