import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileZipIcon],svg[vaadin-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 15H5v-2.8l.7-2.2h2.4l.9 2.2zm4 0h-3v-3L9 9H7V8H5v1l-1 3v3H3V1h4v1h2v1H7v1h2v1h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M5 6h2v1H5zm0-4h2v1H5zm0 2h2v1H5zm2 1h2v1H7zm0 2h2v1H7zm-1 5h2v2H6z"></svg:path>`,
})
export class VaadinFileZipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
