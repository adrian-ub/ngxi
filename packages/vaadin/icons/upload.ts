import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinUploadIcon],svg[vaadin-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10v2H5v-2H0v6h16v-6zm-7 4H2v-2h2z"></svg:path><svg:path fill="currentColor" d="M13 5L8 0L3 5h3v6h4V5z"></svg:path>`,
})
export class VaadinUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
