import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartBroken24RegularIcon],svg[fluent-heart-broken-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.753l.82-.822a5.38 5.38 0 0 1 7.61 0a5.376 5.376 0 0 1 .002 7.599l-7.901 7.897a.75.75 0 0 1-1.061 0L3.575 12.53a5.375 5.375 0 1 1 7.6-7.601zm0 13.083l7.368-7.364a3.88 3.88 0 0 0-5.292-5.662l-1.007.999l-.523.526a1 1 0 0 1-.087.079l-1.237 1.225l2.796 2.671a.75.75 0 0 1 .012 1.073l-2.5 2.5a.75.75 0 1 1-1.06-1.061l1.957-1.957l-2.798-2.673a.75.75 0 0 1-.01-1.075l1.317-1.306l-.82-.82a3.875 3.875 0 0 0-5.48 5.48z"></svg:path>`,
})
export class FluentHeartBroken24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
