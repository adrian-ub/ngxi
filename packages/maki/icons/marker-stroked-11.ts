import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMarkerStroked11Icon],svg[maki-marker-stroked-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.486 11l-.365-.446c-.7-.858-3.544-4.739-3.544-6.638A3.726 3.726 0 0 1 5.132.026q.167-.008.333 0a3.726 3.726 0 0 1 3.888 3.557q.007.166 0 .331c0 1.6-1.806 4.268-3.38 6.415zM5.465.916a2.817 2.817 0 0 0-3 3c0 1.268 1.883 4.161 2.987 5.62c.935-1.282 3.011-4.217 3.011-5.62a2.817 2.817 0 0 0-3-3z" fill="currentColor"></svg:path>`,
})
export class MakiMarkerStroked11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
