import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCnesIcon],svg[simple-icons-cnes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.173 0h.953v13.798c0 2.88 3.682 8.73 9.726 4.83l.122-.068C19.621 21.744 16.256 24 12.317 24c-5.132 0-9.292-3.83-9.292-8.556c0-4.046 3.05-7.436 7.148-8.327zm10.399 11.51c-1.525-2.707-4.575-4.569-8.103-4.62c-.064 1.107.825 7.134 4.96 7.471c1.078.088 3.84-.55 3.143-2.85"></svg:path>`,
})
export class SimpleIconsCnesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
