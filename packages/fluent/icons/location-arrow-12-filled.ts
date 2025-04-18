import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow12FilledIcon],svg[fluent-location-arrow-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.64 1.069c.808-.311 1.603.484 1.292 1.292l-3.076 7.997c-.349.906-1.654.835-1.9-.104l-.803-3.05a.5.5 0 0 0-.357-.356l-3.05-.803c-.938-.247-1.01-1.552-.104-1.9z"></svg:path>`,
})
export class FluentLocationArrow12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
