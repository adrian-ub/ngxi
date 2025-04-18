import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonRibbon16RegularIcon],svg[fluent-person-ribbon-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.622v1.067A6.3 6.3 0 0 1 8 14c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8h5.031c-.144.277-.32.637-.405 1H4.5a.5.5 0 0 0-.5.5v.5c0 1.438 1.432 3 4 3c.772 0 1.441-.141 2-.378M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5m0 1A1.75 1.75 0 1 0 8 6a1.75 1.75 0 0 0 0-3.5M13 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 0 0 2-.536v2.285a.25.25 0 0 1-.378.215L13 15l-1.622.965A.25.25 0 0 1 11 15.75v-2.285A4 4 0 0 0 13 14"></svg:path>`,
})
export class FluentPersonRibbon16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
