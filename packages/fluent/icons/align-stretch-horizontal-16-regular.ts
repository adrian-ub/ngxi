import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignStretchHorizontal16RegularIcon],svg[fluent-align-stretch-horizontal-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm11 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-10 3A1.5 1.5 0 0 1 5.5 3h5A1.5 1.5 0 0 1 12 4.5v1A1.5 1.5 0 0 1 10.5 7h-5A1.5 1.5 0 0 1 4 5.5zM5.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 5A1.5 1.5 0 0 0 4 10.5v1A1.5 1.5 0 0 0 5.5 13h5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 10.5 9zM5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentAlignStretchHorizontal16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
