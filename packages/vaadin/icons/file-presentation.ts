import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFilePresentationIcon],svg[vaadin-file-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zm3 15H3V1h6v4h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M9 6H7v1H4v6h2v1h1v-1h2v1h1v-1h2V7H9zm2 2v4H5V8z"></svg:path><svg:path fill="currentColor" d="M7 9v2l2-1z"></svg:path>`,
})
export class VaadinFilePresentationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
