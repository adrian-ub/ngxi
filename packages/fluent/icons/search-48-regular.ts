import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch48RegularIcon],svg[fluent-search-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.398 33.162A15.94 15.94 0 0 1 21 37c-8.837 0-16-7.163-16-16S12.163 5 21 5s16 7.163 16 16c0 3.967-1.444 7.598-3.835 10.393l9.473 9.473a1.25 1.25 0 0 1-1.768 1.768zM34.5 21c0-7.456-6.044-13.5-13.5-13.5S7.5 13.544 7.5 21S13.544 34.5 21 34.5S34.5 28.456 34.5 21"></svg:path>`,
})
export class FluentSearch48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
