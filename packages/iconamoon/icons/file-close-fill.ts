import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFileCloseFillIcon],svg[iconamoon-file-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a1 1 0 0 0-1 1v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2zm9 2.414L17.586 8H14zm-3.293 7.879a1 1 0 0 0-1.414 1.414L10.586 15l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 16.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 15l1.293-1.293a1 1 0 0 0-1.414-1.414L12 13.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonFileCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
