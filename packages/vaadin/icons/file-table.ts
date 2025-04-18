import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFileTableIcon],svg[vaadin-file-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2v16h12V4zM9 5h4v10H3V1h6zm1-1V1l3 3z"></svg:path><svg:path fill="currentColor" d="M4 7v6h8V7zm2 5H5v-1h1zm0-2H5V9h1zm3 2H7v-1h2zm0-2H7V9h2zm2 2h-1v-1h1zm0-2h-1V9h1z"></svg:path>`,
})
export class VaadinFileTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
