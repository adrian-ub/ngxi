import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStatus28RegularIcon],svg[fluent-status-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.806 4.305a2.75 2.75 0 1 1 3.889 3.89l-7.392 7.39a1.25 1.25 0 0 1-.568.326l-4.936 1.29l1.29-4.936a1.25 1.25 0 0 1 .325-.568zm4.95-1.06a4.25 4.25 0 0 0-6.011 0l-7.392 7.391a2.75 2.75 0 0 0-.716 1.25L9.024 18.06a.75.75 0 0 0 .916.916l6.174-1.613a2.75 2.75 0 0 0 1.25-.716l7.391-7.392a4.25 4.25 0 0 0 0-6.01m-8.868 1.443a9.5 9.5 0 1 0 7.425 7.425l1.237-1.238c.293.99.45 2.04.45 3.125c0 6.075-4.925 11-11 11S3 20.075 3 14S7.925 3 14 3c1.086 0 2.134.157 3.125.45z"></svg:path>`,
})
export class FluentStatus28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
