import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextSortAscending20RegularIcon],svg[fluent-text-sort-ascending-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.466 2.317a.5.5 0 0 0-.931 0l-2.75 7a.5.5 0 0 0 .93.366L4.378 8h3.247l.66 1.683a.5.5 0 0 0 .932-.366zM6 3.867L7.23 7H4.77zM4 11a.5.5 0 0 0 0 1h3.066l-3.482 5.223A.5.5 0 0 0 4 18h4a.5.5 0 0 0 0-1H4.934l3.482-5.223A.5.5 0 0 0 8 11zm10.5-9a.5.5 0 0 1 .5.5v13.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L14 16.293V2.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentTextSortAscending20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
