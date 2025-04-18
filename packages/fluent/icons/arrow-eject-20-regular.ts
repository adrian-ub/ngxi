import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowEject20RegularIcon],svg[fluent-arrow-eject-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.598 5.2a.5.5 0 0 1 .8 0l4.499 6.001a.5.5 0 0 1-.4.8H5.503a.5.5 0 0 1-.4-.8zm1.6-.6c-.6-.8-1.8-.8-2.4 0l-4.496 6.002c-.74.989-.035 2.4 1.2 2.4h8.995c1.236 0 1.941-1.412 1.2-2.4zM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentArrowEject20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
