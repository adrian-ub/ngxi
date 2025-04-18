import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReset48FilledIcon],svg[fluent-arrow-reset-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.81 6.81a1.5 1.5 0 0 0-2.12-2.12l-7.5 7.5a1.5 1.5 0 0 0 0 2.12l7.5 7.5a1.5 1.5 0 0 0 2.12-2.12l-4.939-4.94H26.5c7.042 0 12.75 5.708 12.75 12.75S33.542 40.25 26.5 40.25S13.75 34.542 13.75 27.5a1.5 1.5 0 0 0-3 0c0 8.699 7.052 15.75 15.75 15.75s15.75-7.051 15.75-15.75s-7.051-15.75-15.75-15.75H8.871z"></svg:path>`,
})
export class FluentArrowReset48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
