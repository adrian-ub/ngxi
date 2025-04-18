import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMap16RegularIcon],svg[fluent-map-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.235 2.076a.5.5 0 0 1 .489-.023l4.749 2.374l3.762-2.351A.5.5 0 0 1 15 2.5V11a.5.5 0 0 1-.235.424l-4 2.5a.5.5 0 0 1-.489.023l-4.749-2.374l-3.762 2.351A.5.5 0 0 1 1 13.5V5a.5.5 0 0 1 .235-.424zM6 10.691l4 2V5.309l-4-2zM5 3.402L2 5.277v7.32l3-1.874zm6 1.875v7.32l3-1.874v-7.32z"></svg:path>`,
})
export class FluentMap16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
