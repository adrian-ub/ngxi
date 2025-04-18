import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayerDiagonalPerson24FilledIcon],svg[fluent-layer-diagonal-person-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.252a2.25 2.25 0 0 0-3.016-2.116l-6.84 2.475A3.25 3.25 0 0 0 2 7.667v6.082a2.25 2.25 0 0 0 3 2.121v-5.553c0-1.58.99-2.99 2.474-3.527L14 4.43zm4 3a2.25 2.25 0 0 0-3.016-2.116l-7.17 2.595A2.75 2.75 0 0 0 6 10.317v6.432a2.25 2.25 0 0 0 3 2.122v-5.905a3.25 3.25 0 0 1 2.144-3.056L18 7.429zm4 3a2.25 2.25 0 0 0-3.016-2.116l-7.5 2.714A2.25 2.25 0 0 0 10 12.966v6.783a2.25 2.25 0 0 0 3.016 2.116l.46-.166A3.7 3.7 0 0 1 13 19.875v-.103A2.77 2.77 0 0 1 15.773 17h.277A3.5 3.5 0 1 1 22 14.5zM21 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></svg:path>`,
})
export class FluentLayerDiagonalPerson24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
