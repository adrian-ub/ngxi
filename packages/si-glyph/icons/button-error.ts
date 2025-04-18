import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonErrorIcon],svg[si-glyph-button-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.646 2.371c-3.111-3.11-8.177-3.111-11.288 0s-3.11 8.177 0 11.289c3.111 3.11 8.176 3.111 11.288 0c3.112-3.113 3.111-8.177 0-11.289M4.587 12.431C2.148 9.993 2.146 6.028 4.58 3.594s6.399-2.432 8.838.006s2.439 6.404.006 8.838c-2.436 2.434-6.4 2.431-8.837-.007"></svg:path><svg:path d="M11.164 11.063a.56.56 0 0 1-.388-.141L9.009 9.157l-1.695 1.695a.62.62 0 0 1-.423.146a.84.84 0 0 1-.603-.265c-.221-.22-.27-.438-.271-.58a.55.55 0 0 1 .14-.4l1.724-1.725l-1.68-1.678c-.152-.153-.279-.627.12-1.025c.225-.225.446-.272.593-.272c.183 0 .32.072.387.141L9.009 6.9l1.696-1.696a.62.62 0 0 1 .424-.146a.84.84 0 0 1 .604.266c.378.379.302.81.131.98L10.138 8.03l1.737 1.736c.067.068.146.22.146.424a.83.83 0 0 1-.265.602c-.225.224-.445.271-.592.271"></svg:path></svg:g>`,
})
export class SiGlyphButtonErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
