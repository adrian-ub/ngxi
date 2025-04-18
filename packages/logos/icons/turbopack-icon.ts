import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTurbopackIconIcon],svg[logos-turbopack-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosTurbopackIcon0" x1="50%" x2="49.855%" y1="7.896%" y2="93.343%"><svg:stop offset="0%" stop-color="#0096FF"></svg:stop><svg:stop offset="100%" stop-color="#FF1E56"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosTurbopackIcon0)" d="M128 0L46.16 46.768l.16 36.752L128 36.848l96 54.864L256 110V73.136zm-14.4 247.488L32 200.864V91.792l-.032-.016l-.176-36.8L0 73.136v146.288l81.68 46.672zM224 200.864v-92.56l32 18.288v92.832l-128 73.152l-31.888-18.224L128 255.76v-.048z"></svg:path><svg:path d="M46.4 108.369v84.128l81.6 46.64v-84.144zM128 53.441l-74.352 42.48l81.616 46.64l74.336-42.496z"></svg:path>`,
})
export class LogosTurbopackIconIcon {
  readonly viewBox = input("0 0 256 293")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
