import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOptions48FilledIcon],svg[fluent-options-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 15.5h19.875a6.252 6.252 0 0 0 12.25 0h5.375a1.25 1.25 0 1 0 0-2.5h-5.375a6.252 6.252 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5m0 19h5.625a6.252 6.252 0 0 0 12.25 0H42.75a1.25 1.25 0 1 0 0-2.5H23.125a6.252 6.252 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5"></svg:path>`,
})
export class FluentOptions48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
