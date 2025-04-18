import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonRibbon16FilledIcon],svg[fluent-person-ribbon-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.645v1.044A6.3 6.3 0 0 1 8 14c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8h5.035A4 4 0 0 0 9 10c0 1.014.378 1.94 1 2.645M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5M13 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 0 0 2-.536v2.285a.25.25 0 0 1-.378.215L13 15l-1.622.965A.25.25 0 0 1 11 15.75v-2.285A4 4 0 0 0 13 14"></svg:path>`,
})
export class FluentPersonRibbon16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
