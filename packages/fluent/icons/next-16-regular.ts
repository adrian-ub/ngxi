import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNext16RegularIcon],svg[fluent-next-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0zM2 3.002a1 1 0 0 1 1.579-.816l7 4.963a1 1 0 0 1 .006 1.628l-7 5.037A1 1 0 0 1 2 13.003zm8 4.963L3 3.002v10z"></svg:path>`,
})
export class FluentNext16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
