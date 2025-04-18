import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowtriangleLeftIcon],svg[f7-arrowtriangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.3 9.367c-.937 0-1.687.399-2.671.89L11.512 24.884C9.52 25.867 8.887 26.758 8.887 28s.633 2.156 2.625 3.14l30.117 14.602c1.008.492 1.758.89 2.695.89c1.735 0 2.79-1.312 2.79-3.35V12.718c0-2.04-1.079-3.352-2.813-3.352m-1.194 4.453c.14 0 .234.117.234.281l.023 27.797c0 .188-.093.282-.234.282c-.094 0-.188-.047-.281-.094L14.137 28.258c-.117-.047-.211-.14-.211-.258s.094-.21.21-.258l28.688-13.804a.5.5 0 0 1 .282-.118"></svg:path>`,
})
export class F7ArrowtriangleLeftIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
