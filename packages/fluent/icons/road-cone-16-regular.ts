import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone16RegularIcon],svg[fluent-road-cone-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.462 1a1 1 0 0 0-.97.757L3.43 14H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-1.931L9.509 1.757A1 1 0 0 0 8.538 1zm4.076 13H4.462l.625-2.5H9.25a.5.5 0 0 0 0-1H5.337l.5-2H8.5a.5.5 0 0 0 0-1H6.087L7.462 2h1.076z"></svg:path>`,
})
export class FluentRoadCone16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
