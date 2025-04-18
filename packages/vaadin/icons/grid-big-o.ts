import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinGridBigOIcon],svg[vaadin-grid-big-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h7V0H0zm1-6h5v5H1zm8-1v7h7V0zm6 6h-5V1h5zM0 16h7V9H0zm1-6h5v5H1zm8 6h7V9H9zm1-6h5v5h-5z"></svg:path>`,
})
export class VaadinGridBigOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
