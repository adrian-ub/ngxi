import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingRetailMore20FilledIcon],svg[fluent-building-retail-more-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.293A1 1 0 0 1 4.707 3h10.586a1 1 0 0 1 .707.293l2.642 2.641c.762.763.222 2.066-.856 2.066H2.214C1.136 8 .597 6.697 1.36 5.934zM17 9H3v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM7 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentBuildingRetailMore20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
