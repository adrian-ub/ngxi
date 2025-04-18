import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionHorizontalLtr20RegularIcon],svg[fluent-text-direction-horizontal-ltr-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3a.5.5 0 0 1 .468.324l3 8a.5.5 0 0 1-.936.352L8.029 9H4.972l-1.004 2.676a.5.5 0 0 1-.936-.352l3-8A.5.5 0 0 1 6.5 3m0 1.924L5.347 8h2.307zm8.354-.778a.5.5 0 1 0-.707.708L15.293 6H10.5a.5.5 0 0 0 0 1h4.793l-1.146 1.146a.5.5 0 1 0 .707.708l2-2a.5.5 0 0 0 0-.708zm0 8a.5.5 0 0 0-.707.708L15.293 14H3.5a.5.5 0 0 0 0 1h11.793l-1.146 1.146a.5.5 0 0 0 .707.708l2-2a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentTextDirectionHorizontalLtr20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
