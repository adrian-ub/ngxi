import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLoudlyCryingFaceIcon],svg[fluent-emoji-flat-loudly-crying-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#5092FF" d="M11 29.297V8H7.5A1.5 1.5 0 0 0 6 9.5v16.91c1.333 1.28 3 2.273 5 2.887m15-2.89c-1.333 1.282-3 2.275-5 2.89V8h3.5A1.5 1.5 0 0 1 26 9.5z"></svg:path><svg:path fill="#402A32" d="M6.949 9.316c.048-.145.435-.816 1.551-.816s1.503.67 1.551.816a1 1 0 0 0 1.898-.632C11.664 7.829 10.585 6.5 8.5 6.5S5.336 7.83 5.051 8.684a1 1 0 0 0 1.898.632m15 0c.048-.145.435-.816 1.551-.816s1.503.67 1.551.816a1 1 0 0 0 1.898-.632C26.664 7.829 25.584 6.5 23.5 6.5s-3.164 1.33-3.449 2.184a1 1 0 0 0 1.898.632"></svg:path><svg:path fill="#BB1D80" d="M12 15a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLoudlyCryingFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
