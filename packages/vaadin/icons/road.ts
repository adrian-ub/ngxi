import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinRoadIcon],svg[vaadin-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v4h7L12 1H9v3H7V1H4L0 15h7v-4zM7 6h2v3H7z"></svg:path>`,
})
export class VaadinRoadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
