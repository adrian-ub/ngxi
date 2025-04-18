import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileFontIcon],svg[vaadin-file-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M5 7v2h2v5h2V9h2V7z"></svg:path>`,
})
export class VaadinFileFontIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
