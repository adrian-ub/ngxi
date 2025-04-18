import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal4Search20RegularIcon],svg[fluent-line-horizontal-4-search-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 10a4.48 4.48 0 0 0 2.809-.984l3.837 3.838a.5.5 0 0 0 .708-.708L16.016 8.31A4.5 4.5 0 1 0 12.5 10m0-8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m.02 9h3.359l1 1H2.5a.5.5 0 0 1 0-1zM2.5 3h5.1a5.5 5.5 0 0 0-.393 1H2.5a.5.5 0 0 1 0-1m5.1 5a5.5 5.5 0 0 1-.393-1H2.5a.5.5 0 0 0 0 1zM2 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentLineHorizontal4Search20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
