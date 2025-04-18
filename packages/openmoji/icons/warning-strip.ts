import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWarningStripIcon],svg[openmoji-warning-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M11.602 27.036a2.73 2.73 0 0 1 2.504-1.935h50.72a1.472 1.472 0 0 1 1.496 1.935L60.61 48.964a2.73 2.73 0 0 1-2.504 1.936H7.386a1.472 1.472 0 0 1-1.496-1.935Z"></svg:path><svg:path fill="#f1b31c" d="m60.444 49.614l3.495-13.429a194 194 0 0 1-24.953 8.955a218 218 0 0 1-28.8 5.76h48.558a1.71 1.71 0 0 0 1.7-1.286"></svg:path><svg:path d="M34.006 25.1h9.6l-6.72 25.8h-9.6zm15.661 0h9.6l-6.72 25.8h-9.6zm-31.321 0h9.6l-6.72 25.8h-9.6z"></svg:path><svg:path fill="none" d="M11.602 27.036a2.73 2.73 0 0 1 2.504-1.935h50.72a1.472 1.472 0 0 1 1.496 1.935L60.61 48.964a2.73 2.73 0 0 1-2.504 1.936H7.386a1.472 1.472 0 0 1-1.496-1.935Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.99 27.048a2.65 2.65 0 0 1 2.456-1.947h51.38a1.494 1.494 0 0 1 1.52 1.94l-5.429 21.917a2.69 2.69 0 0 1-2.48 1.942H7.386a1.516 1.516 0 0 1-1.543-1.947Zm27.68-1.947L31.951 50.9m22.05-25.799L47.281 50.9M23.01 25.101L16.29 50.9"></svg:path>`,
})
export class OpenmojiWarningStripIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
