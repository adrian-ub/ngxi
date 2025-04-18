import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileRefreshIcon],svg[vaadin-file-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zm3 15H3V1h6v4h4zM10 4V1l3 3z"></svg:path><svg:path fill="currentColor" d="M4.7 7.7L4 7v3h3L5.8 8.8C6.2 8 7.1 7.5 8 7.5c1.4 0 2.5 1.1 2.5 2.5H12c0-2.2-1.8-4-4-4c-1.3 0-2.5.7-3.3 1.7m5.1 4.1c-.5.5-1.1.8-1.8.7c-1 0-1.9-.6-2.3-1.5H4.1c.4 1.7 2 3 3.8 3c1.1 0 2.1-.5 2.8-1.2L12 14v-3H9z"></svg:path>`,
})
export class VaadinFileRefreshIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
