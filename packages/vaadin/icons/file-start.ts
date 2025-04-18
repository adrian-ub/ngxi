import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileStartIcon],svg[vaadin-file-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zm3 15H3V1h6v4h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M5 6v6l6-3z"></svg:path>`,
})
export class VaadinFileStartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
