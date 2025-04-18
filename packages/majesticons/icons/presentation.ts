import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPresentationIcon],svg[majesticons-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2a1 1 0 0 0 0 2v11a1 1 0 0 0 1 1h4.613L7.05 20.684a1 1 0 0 0 1.898.632L10.72 16h2.558l1.772 5.316a1 1 0 0 0 1.898-.632L15.387 16H20a1 1 0 0 0 1-1V4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
