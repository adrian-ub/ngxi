import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTextIcon],svg[vaadin-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0v4h4z"></svg:path><svg:path fill="currentColor" d="M9 0H2v16h12V5H9zm3 12H4v-1h8zm0-2H4V9h8zm0-3v1H4V7z"></svg:path>`,
})
export class VaadinFileTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
