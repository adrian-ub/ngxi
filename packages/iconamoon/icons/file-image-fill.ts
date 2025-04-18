import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFileImageFillIcon],svg[iconamoon-file-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a1 1 0 0 0-1 1v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2zm9 2.414L17.586 8H14zM8 10.5A1.5 1.5 0 0 1 9.5 9h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H9.5a1.5 1.5 0 0 1-1.5-1.5zm4.707 2.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L12 15.414l3.293 3.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonFileImageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
